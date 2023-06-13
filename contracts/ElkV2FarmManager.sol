// SPDX-License-Identifier: BUSL-1.1
//
// Copyright (c) 2023 ElkLabs
// License terms: https://github.com/elkfinance/faas/blob/main/LICENSE
//
// Authors:
// - Seth <seth@elklabs.org>
// - Baal <baal@elklabs.org>
// - Elijah <elijah@elklabs.org>
// - Snake <snake@elklabs.org>

pragma solidity >=0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./interfaces/IElkV2FarmingRewards.sol";
import "./interfaces/IElkV2FarmingRewardsPermissioned.sol";
import "./interfaces/IElkV2FarmFactory.sol";
import "./interfaces/IElkV2FarmManager.sol";

/**
 * This contract serves as the main point of contact between any FarmingRewards creators and their farm contract.
 * It contains any function in FarmingRewards that would normally be restricted to the owner and allows access to its functionality as long as the caller is the known owner in the ElkFarmFactory contract.
 */
contract ElkV2FarmManager is IElkV2FarmManager, Ownable {
    using SafeERC20 for IERC20;

    /* ========== STATE VARIABLES ========== */

    /// @notice interface to the farm factory
    IElkV2FarmFactory public farmFactory;

    /// @notice last timestamp the farm was started
    mapping(address => uint256) public lastStarted;

    /// @notice minimum time before a started farm can be stopped
    uint256 public minDelayBeforeStop;

    /* ========== CONSTRUCTOR ========== */

    /**
     * @param _factoryAddress The address of the ElkFarmFactory contract.
     * @param _minDelayBeforeStop The minimum time before a farm can be stopped after having been started.
     */
    constructor(address _factoryAddress, uint256 _minDelayBeforeStop) {
        require(_factoryAddress != address(0), "ElkV2FarmManager: ZERO_ADDRESS");
        farmFactory = IElkV2FarmFactory(_factoryAddress);
        minDelayBeforeStop = _minDelayBeforeStop;
    }

    /**
     * @notice Utility function for use by Elk in order to change the ElkFarmFactory if needed.
     * @param _factoryAddress The address of the ElkFarmFactory contract.
     */
    function setFarmFactory(address _factoryAddress) external onlyOwner {
        require(_factoryAddress != address(0), "ElkV2FarmManager: ZERO_ADDRESS");
        farmFactory = IElkV2FarmFactory(_factoryAddress);
        emit FarmFactorySet(_factoryAddress);
    }

    /**
     * @notice Utility function for use by Elk in order to change the minimum delay before a farm can be stopped if needed.
     * @param _delay The minimum delay in seconds.
     */
    function setMinDelayBeforeStop(uint256 _delay) external onlyOwner {
        minDelayBeforeStop = _delay;
    }

    /* ========== MODIFIERS ========== */

    /**
     * @notice The check used by each function that interacts with the FarmingRewards contract. It reads from the owners stored in ElkFarmFactory to determine if the caller is the known owner of the FarmingRewards contract it is trying to interact with.
     * @param _farmAddress The address of the FarmingRewards contract.
     */
    modifier checkOwnership(address _farmAddress) {
        require(
            farmFactory.isFarm(_farmAddress) || farmFactory.isPermissionedFarm(_farmAddress),
            "ElkV2FarmManager: UNKNOWN_FARM"
        );

        IElkV2FarmingRewards rewardsContract = IElkV2FarmingRewards(_farmAddress);
        address lpTokenAddress = address(rewardsContract.stakingToken());

        if (farmFactory.isFarm(_farmAddress)) {
            require(farmFactory.getFarm(msg.sender, lpTokenAddress) == _farmAddress, "ElkV2FarmManager: NOT_OWNER");
        } else {
            require(
                farmFactory.getPermissionedFarm(msg.sender, lpTokenAddress) == _farmAddress,
                "ElkV2FarmManager: NOT_OWNER"
            );
        }

        _;
    }

    /* ========== Farm Functions ========== */

    /**
     * @notice Starts the farm emission for the given FarmingRewards contract address. The amount of rewards per rewards token, ILP coverage amount, and duration of the
     * farm emissions must be supplied. Any reward or coverage tokens are sent to the FarmingRewards contract when this function is called.
     * @param _farmAddress The address of the FarmingRewards contract.
     * @param _rewards An array of rewards indexed by reward token number.
     * @param _coverage The amount of coverage for the farm.
     * @param _duration How long the farm will emit rewards and provide coverage.
     */
    function startEmissionWithCoverage(
        address _farmAddress,
        uint256[] memory _rewards,
        uint256 _coverage,
        uint256 _duration
    ) external checkOwnership(_farmAddress) {
        IElkV2FarmingRewards farm = IElkV2FarmingRewards(_farmAddress);
        // Transfer rewards
        for (uint i = 0; i < _rewards.length; ++i) {
            IERC20(farm.rewardTokens(i)).safeTransferFrom(msg.sender, _farmAddress, _rewards[i]);
        }
        // Transfer coverage
        if (_coverage > 0) {
            IERC20(farm.coverageTokenAddress()).safeTransferFrom(msg.sender, _farmAddress, _coverage);
        }
        // Start emissions
        IElkV2FarmingRewards(_farmAddress).startEmission(_rewards, _coverage, _duration);
        lastStarted[_farmAddress] = block.timestamp;
    }

    /**
     * @notice Same utility as startEmissionWithCoverage, but coverage does not need to be supplied.
     * @param _farmAddress The address of the FarmingRewards contract.
     * @param _rewards The amount of rewards per rewards token.
     * @param _duration The duration of the farm emissions.
     */
    function startEmission(
        address _farmAddress,
        uint256[] memory _rewards,
        uint256 _duration
    ) external checkOwnership(_farmAddress) {
        IElkV2FarmingRewards farm = IElkV2FarmingRewards(_farmAddress);
        // Transfer rewards
        for (uint i = 0; i < _rewards.length; ++i) {
            IERC20(farm.rewardTokens(i)).safeTransferFrom(msg.sender, _farmAddress, _rewards[i]);
        }
        // Start emissions
        farm.startEmission(_rewards, _duration);
        lastStarted[_farmAddress] = block.timestamp;
    }

    /**
     * @notice Stops the given farm's emissions and refunds any leftover reward token(s) to the msg.sender.
     * @param _farmAddress The address of the FarmingRewards contract.
     */
    function stopEmission(address _farmAddress) external checkOwnership(_farmAddress) {
        require(lastStarted[_farmAddress] + minDelayBeforeStop <= block.timestamp, "ElkV2FarmManager: TOO_SHORT_DELAY");
        IElkV2FarmingRewards(_farmAddress).stopEmission(msg.sender);
    }

    /**
     * @notice Recovers an ERC20 token to the owners wallet. The token cannot be the staking token or any of the rewards tokens for the farm.
     * @dev Ensures any unnecessary tokens are not lost if sent to the farm contract.
     * @param _farmAddress The address of the FarmingRewards contract.
     * @param _tokenAddress The address of the token to recover.
     * @param _amount The amount of the token to recover.
     */
    function recoverERC20(
        address _farmAddress,
        address _tokenAddress,
        uint256 _amount
    ) external checkOwnership(_farmAddress) {
        IElkV2FarmingRewards(_farmAddress).recoverERC20(_tokenAddress, msg.sender, _amount);
    }

    /**
     * @notice Recovers the given leftover reward token to the msg.sender. Cannot be called while the farm is active or if there are any LP tokens staked in the contract.
     * @param _farmAddress The address of the FarmingRewards contract.
     * @param _tokenAddress The address of the token to recover.
     */
    function recoverLeftoverReward(address _farmAddress, address _tokenAddress) external checkOwnership(_farmAddress) {
        IElkV2FarmingRewards(_farmAddress).recoverLeftoverReward(_tokenAddress, msg.sender);
    }

    /**
     * @notice Utility function that allows the farm owner to add a new reward token to the contract. Cannot be called while the farm is active.
     * @param _farmAddress The address of the FarmingRewards contract.
     * @param _tokenAddress The address of the token to add.
     */
    function addRewardToken(address _farmAddress, address _tokenAddress) external checkOwnership(_farmAddress) {
        IElkV2FarmingRewards(_farmAddress).addRewardToken(_tokenAddress);
    }

    /* ========== ILP ========== */

    /**
     * @notice Recovers the given leftover coverage token to the msg.sender. Cannot be called while the farm is active or if there are any LP tokens staked in the contract.
     * @param _farmAddress The address of the FarmingRewards contract.
     */
    function recoverLeftoverCoverage(address _farmAddress) external checkOwnership(_farmAddress) {
        IElkV2FarmingRewards(_farmAddress).recoverLeftoverCoverage(msg.sender);
    }

    /* ========== FEES ========== */

    /**
     * @notice Withdraw fees collected from deposits/withdrawals in the FarmingRewards contract to msg.sender.
     * @param _farmAddress The address of the FarmingRewards contract.
     */
    function recoverFees(address _farmAddress) external checkOwnership(_farmAddress) {
        IElkV2FarmingRewards(_farmAddress).recoverFees(msg.sender);
    }

    /**
     * @notice Withdraw fees collected from deposits/withdrawals in the FarmingRewards contract to msg.sender.
     * @param _walletAddress The wallet address to permit.
     * @param _permission true to allow, false to revoke permit.
     * @param _permissionedFarmAddress The address of the FarmingRewardsPermissioned contract.
     */
    function setAddressPermission(
        address _walletAddress,
        bool _permission,
        address _permissionedFarmAddress
    ) external checkOwnership(_permissionedFarmAddress) {
        IElkV2FarmingRewardsPermissioned(_permissionedFarmAddress).setAddressPermission(_walletAddress, _permission);
    }

    /* ========== FARMER FUNCTIONS ========== */

    /**
     * @notice Function for farm users to claim rewards from multiple farms at once.
     * @param _farms The addresses of the FarmingRewards contracts.
     */
    function multiClaim(address[] memory _farms) external {
        require(_farms.length < 30, "ElkV2FarmManager: TOO_MANY_FARMS");

        for (uint i = 0; i < _farms.length; i++) {
            address farmAddress = address(_farms[i]);
            IElkV2FarmingRewards(farmAddress).getRewards(msg.sender);

            emit RewardsReceived(_farms[i]);
        }
    }
}

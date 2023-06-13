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

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { SafeERC20 } from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { IStakingRewards } from "./interfaces/IStakingRewards.sol";
import { IStakeFactory } from "./interfaces/IStakeFactory.sol";
import { IStakeManager } from "./interfaces/IStakeManager.sol";

/**
 * This contract serves as the main point of contact between any StakingRewards
   creators and their farm contract.
 * It contains any function in StakingRewards that would normally be restricted
   to the owner and allows access to its functionality long as the caller is the
   known owner in the StakeFactory contract.
 */
contract StakeManager is IStakeManager, Ownable {
    using SafeERC20 for IERC20;

    /* ========== STATE VARIABLES ========== */

    /// @notice Staking factory interface
    IStakeFactory public stakeFactory;

    /// @notice last timestamp the farm was started
    mapping(address stakeAddress => uint256 timestano) public lastStarted;

    /// @notice minimum time before a started farm can be stopped
    uint256 public minDelayBeforeStop;

    /* ========== CONSTRUCTOR ========== */

    /**
     * @param _factoryAddress The address of the ElkFarmFactory contract.
     * @param _minDelayBeforeStop The minimum time before a farm can be stopped after having been started.
     */
    constructor(address _factoryAddress, uint256 _minDelayBeforeStop) {
        require(_factoryAddress != address(0), "StakeManager: ZERO_ADDRESS");
        stakeFactory = IStakeFactory(_factoryAddress);
        minDelayBeforeStop = _minDelayBeforeStop;
    }

    /**
     * @notice Utility function for use by Elk in order to change the StakingFactory if needed.
     * @param _factoryAddress The address of the StakeFactory contract.
     */
    function setFarmFactory(address _factoryAddress) external onlyOwner {
        require(_factoryAddress != address(0), "StakeManager: ZERO_ADDRESS");
        stakeFactory = IStakeFactory(_factoryAddress);
        emit FarmFactorySet(_factoryAddress);
    }

    /**
     * @notice Utility function for use by Elk in order to change the minimum
       delay before a farm can be stopped if needed.
     * @param _delay The minimum delay in seconds.
     */
    function setMinDelayBeforeStop(uint256 _delay) external onlyOwner {
        minDelayBeforeStop = _delay;
    }

    /* ========== MODIFIERS ========== */

    /**
     * @notice The check used by each function that interacts with the
       StakingRewards contract. It reads from the owners stored in
       StakingFactory to determine if the caller is the known owner of the
       StakingRewards contract it is trying to interact with.
     * @param _stakeAddress The address of the StakingRewards contract.
     */
    modifier checkOwnership(address _stakeAddress) {
        IStakingRewards rewardsContract = IStakingRewards(_stakeAddress);
        address lpTokenAddress = address(rewardsContract.stakingToken());
        require(stakeFactory.getStake(msg.sender, lpTokenAddress) == _stakeAddress, "StakeManager: NOT_OWNER");
        _;
    }

    /* ========== Farm Functions ========== */

    /**
     * @dev Any reward tokens are sent to the StakingRewards contract when this function is called.
     * @notice Starts the farm emission for the given StakingRewards contract address.
     * @param _stakeAddress The address of the StakingRewards contract.
     * @param _rewards The amount of rewards per rewards token.
     * @param _duration The duration of the farm emissions.
     */
    function startEmission(
        address _stakeAddress,
        uint256[] memory _rewards,
        uint256 _duration
    ) external checkOwnership(_stakeAddress) {
        IStakingRewards stake = IStakingRewards(_stakeAddress);
        // Transfer rewards
        for (uint i = 0; i < _rewards.length; ++i) {
            IERC20(stake.rewardTokens(i)).safeTransferFrom(msg.sender, _stakeAddress, _rewards[i]);
        }
        // Start emissions
        stake.startEmission(_rewards, _duration);
        lastStarted[_stakeAddress] = block.timestamp;
    }

    /**
     * @notice Stops the given farm's emissions and refunds any leftover reward token(s) to the msg.sender.
     * @param _stakeAddress The address of the StakingRewards contract.
     */
    function stopEmission(address _stakeAddress) external checkOwnership(_stakeAddress) {
        require(lastStarted[_stakeAddress] + minDelayBeforeStop <= block.timestamp, "StakeManager: TOO_SHORT_DELAY");
        IStakingRewards(_stakeAddress).stopEmission(msg.sender);
    }

    /**
     * @notice Recovers the given leftover reward token to the msg.sender.
     * @notice Cannot be called while the farm is active or if there are any LP tokens staked in the contract.
     * @param _stakeAddress The address of the StakingRewards contract.
     * @param _tokenAddress The address of the token to recover.
     */
    function recoverLeftoverReward(
        address _stakeAddress,
        address _tokenAddress
    ) external checkOwnership(_stakeAddress) {
        IStakingRewards(_stakeAddress).recoverLeftoverReward(_tokenAddress, msg.sender);
    }

    /**
     * @notice Utility function that allows the farm owner to add a new reward token to the contract.
     * @dev Cannot be called while the farm is active.
     * @param _stakeAddress The address of the StakingRewards contract.
     * @param _tokenAddress The address of the token to add.
     */
    function addRewardToken(address _stakeAddress, address _tokenAddress) external checkOwnership(_stakeAddress) {
        IStakingRewards(_stakeAddress).addRewardToken(_tokenAddress);
    }

    /**
     * @notice Recovers an ERC20 token to the owners wallet. The token cannot be
       the staking token or any of the rewards tokens for the farm.
     * @dev Ensures any unnecessary tokens are not lost if sent to the farm
       contract.
     * @param _stakeAddress The address of the StakingRewards contract.
     * @param _tokenAddress The address of the token to recover.
     * @param _amount The amount of the token to recover.
     */
    function recoverERC20(
        address _stakeAddress,
        address _tokenAddress,
        uint256 _amount
    ) external checkOwnership(_stakeAddress) {
        IStakingRewards(_stakeAddress).recoverERC20(_tokenAddress, msg.sender, _amount);
    }

    /* ========== FEES ========== */

    /**
     * @notice Withdraw fees collected from deposits/withdrawals in the
       StakingRewards contract to msg.sender.
     * @param _stakeAddress The address of the StakingRewards contract.
     */
    function recoverFees(address _stakeAddress) external checkOwnership(_stakeAddress) {
        IStakingRewards(_stakeAddress).recoverFees(msg.sender);
    }

    /* ========== FARMER FUNCTIONS ========== */

    /**
     * @notice Function for farm users to claim rewards from multiple farms at once.
     * @param _farms The addresses of the StakingRewards contracts.
     */
    function multiClaim(address[] memory _farms) external {
        require(_farms.length < 30, "StakeManager: TOO_MANY_FARMS");

        for (uint i = 0; i < _farms.length; i++) {
            address farmAddress = address(_farms[i]);
            IStakingRewards(farmAddress).getRewards(msg.sender);

            emit RewardsReceived(_farms[i]);
        }
    }
}

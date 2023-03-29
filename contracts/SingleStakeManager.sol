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

import "@openzeppelin/contracts@4.8.0/access/Ownable.sol";
import "./interfaces/ISingleStakingRewards.sol";
import "./interfaces/ISingleStakeFactory.sol";
import "./interfaces/ISingleStakeManager.sol";

/**
 * This contract serves as the main point of contact between any SingleStakingRewards creators and their farm contract.
 * It contains any function in SingleStakingRewards that would normally be restricted to the owner and allows access to its functionality long as the caller is the known owner in the SingleStakeFactory contract.
 */
contract SingleStakeManager is ISingleStakeManager, Ownable {

    /* ========== STATE VARIABLES ========== */

    /// @notice Staking factory interface
    ISingleStakeFactory public stakeFactory;
    
    /* ========== CONSTRUCTOR ========== */

    /**
     * @param _factoryAddress The address of the SingleStakeFactory contract.
     */
    constructor(address _factoryAddress) {
        stakeFactory = ISingleStakeFactory(_factoryAddress);
    }

    /**
     * @notice Utility function for use by Elk in order to change the SingleStakingFactory if needed.
     * @param _factoryAddress The address of the SingleStakeFactory contract.
     */
    function setFarmFactory(address _factoryAddress) external onlyOwner {
        require(
            _factoryAddress != address(0),
            "factoryAddress is the zero address"
        );
        stakeFactory = ISingleStakeFactory(_factoryAddress);
        emit FarmFactorySet(_factoryAddress);
    }

    /* ========== MODIFIERS ========== */

    /**
     * @notice The check used by each function that interacts with the SingleStakingRewards contract. It reads from the owners stored in SingleStakingFactory to determine if the caller is the known owner of the SingleStakingRewards contract it is trying to interact with.
     * @param _singleStakeAddress The address of the SingleStakingRewards contract.
     */
    modifier checkOwnership(address _singleStakeAddress) {
        ISingleStakingRewards rewardsContract = ISingleStakingRewards(
            _singleStakeAddress
        );
        address lpTokenAddress = address(rewardsContract.stakingToken());
        require(
            stakeFactory.getSingleStake(msg.sender, lpTokenAddress) ==
                _singleStakeAddress,
            "caller is not owner"
        );
        _;
    }

    /* ========== Farm Functions ========== */

    /**
     * @dev Any reward tokens must be sent to the SingleStakingRewards contract before this function is called.
     * @notice Starts the farm emission for the given SingleStakingRewards contract address.
     * @param _singleStakeAddress The address of the SingleStakingRewards contract.
     * @param _rewards The amount of rewards per rewards token.
     * @param _duration The duration of the farm emissions.
     */
    function startEmission(
        address _singleStakeAddress,
        uint256[] memory _rewards,
        uint256 _duration
    ) external checkOwnership(_singleStakeAddress) {
        ISingleStakingRewards(_singleStakeAddress).startEmission(
            _rewards,
            _duration
        );
    }

    /**
     * @notice Stops the given farm's emissions and refunds any leftover reward token(s) to the msg.sender.
     * @param _singleStakeAddress The address of the SingleStakingRewards contract.
     */
    function stopEmission(
        address _singleStakeAddress
    ) external checkOwnership(_singleStakeAddress) {
        ISingleStakingRewards(_singleStakeAddress).stopEmission(msg.sender);
    }

    /**
     * @notice Recovers the given leftover reward token to the msg.sender.
     * @notice Cannot be called while the farm is active or if there are any LP tokens staked in the contract.
     * @param _singleStakeAddress The address of the SingleStakingRewards contract.
     * @param _tokenAddress The address of the token to recover.
     */
    function recoverLeftoverReward(
        address _singleStakeAddress,
        address _tokenAddress
    ) external checkOwnership(_singleStakeAddress) {
        ISingleStakingRewards(_singleStakeAddress).recoverLeftoverReward(
            _tokenAddress,
            msg.sender
        );
    }

    /**
     * @notice Utility function that allows the farm owner to add a new reward token to the contract.
     * @dev Cannot be called while the farm is active.
     * @param _singleStakeAddress The address of the SingleStakingRewards contract.
     * @param _tokenAddress The address of the token to add.
     */
    function addRewardToken(
        address _singleStakeAddress,
        address _tokenAddress
    ) external checkOwnership(_singleStakeAddress) {
        ISingleStakingRewards(_singleStakeAddress).addRewardToken(
            _tokenAddress
        );
    }

    /**
     * @notice Recovers an ERC20 token to the owners wallet. The token cannot be the staking token or any of the rewards tokens for the farm.
     * @dev Ensures any unnecessary tokens are not lost if sent to the farm contract.
     * @param _singleStakeAddress The address of the SingleStakingRewards contract.
     * @param _tokenAddress The address of the token to recover.
     * @param _amount The amount of the token to recover.
     */
    function recoverERC20(
        address _singleStakeAddress,
        address _tokenAddress,
        uint256 _amount
    ) external checkOwnership(_singleStakeAddress) {
        ISingleStakingRewards(_singleStakeAddress).recoverERC20(
            _tokenAddress,
            msg.sender,
            _amount
        );
    }

    /* ========== FEES ========== */

    /**
     * @notice Allows the farm owner to set the withdrawal and deposit fees to be used in the farm.
     * @param _singleStakeAddress The address of the SingleStakingRewards contract.
     * @param _depositFeeBps The deposit fee in basis points.
     * @param _withdrawalFeesBps The withdrawal fee in basis points.
     * @param _withdrawalFeeSchedule The schedule for the withdrawal fee to be applied.
     */
    function setFees(
        address _singleStakeAddress,
        uint16 _depositFeeBps,
        uint16[] memory _withdrawalFeesBps,
        uint32[] memory _withdrawalFeeSchedule
    ) external checkOwnership(_singleStakeAddress) {
        ISingleStakingRewards(_singleStakeAddress).setFees(
            _depositFeeBps,
            _withdrawalFeesBps,
            _withdrawalFeeSchedule
        );
    }

    /**
     * @notice Withdraw fees collected from deposits/withdrawals in the SingleStakingRewards contract to msg.sender.
     * @param _singleStakeAddress The address of the SingleStakingRewards contract.
     */
    function recoverFees(
        address _singleStakeAddress
    ) external checkOwnership(_singleStakeAddress) {
        ISingleStakingRewards(_singleStakeAddress).recoverFees(msg.sender);
    }

    /* ========== FARMER FUNCTIONS ========== */

    /**
     * @notice Function for farm users to claim rewards from multiple farms at once.
     * @param _farms The addresses of the SingleStakingRewards contracts.
     */
    function multiClaim(address[] memory _farms) external {
        require(_farms.length < 30, "Too many contracts, use less than 30");

        for (uint i = 0; i < _farms.length; i++) {
            address farmAddress = address(_farms[i]);
            ISingleStakingRewards(farmAddress).getRewards(msg.sender);

            emit RewardsReceived(_farms[i]);
        }
    }
}

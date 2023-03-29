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

import "./StakingRewards.sol";
import "./interfaces/ISingleStakingRewards.sol";

/**
 * Adds support for multiple booster tokens
 */
contract SingleStakingRewards is StakingRewards, ISingleStakingRewards {
    using SafeERC20 for IERC20;

    /* ========== CONSTRUCTOR ========== */

    /**
     * @param _stakingTokenAddress address of the token used for staking (must be ERC20)
     * @param _rewardTokenAddresses array of addresses of the tokens used for rewards (must be ERC20)
     * @param _rewardsDuration duration of the rewards period
     * @param _depositFeeBps deposit fee in basis points
     * @param _withdrawalFeesBps array of withdrawal fees in basis points
     * @param _withdrawalFeeSchedule array of timestamps for the fee schedule
     */
    constructor(
        address _stakingTokenAddress,
        address[] memory _rewardTokenAddresses,
        uint256 _rewardsDuration,
        uint16 _depositFeeBps,
        uint16[] memory _withdrawalFeesBps,
        uint32[] memory _withdrawalFeeSchedule
    )
        StakingRewards(
            _stakingTokenAddress,
            _rewardTokenAddresses,
            _rewardsDuration,
            _depositFeeBps,
            _withdrawalFeesBps,
            _withdrawalFeeSchedule
        )
    {
        require(
            _stakingTokenAddress != address(0),
            "Staking token must be an ElkDex LP token"
        );
    }

    /**
     * @notice Compounds the rewards for the caller
     */
    function compoundSingleStakingRewards() external updateRewards(msg.sender) {
        address stakingTokenAddress = address(stakingToken);
        require(
            rewardTokenAddresses[stakingTokenAddress],
            "Cannot compound: Staking token is not one of the rewards tokens."
        );

        uint256 reward = rewards[stakingTokenAddress][msg.sender];

        if (reward > 0) {
            uint256 oldBalance = balances[msg.sender];
            rewards[stakingTokenAddress][msg.sender] = 0;
            balances[msg.sender] += reward;
            totalSupply += reward;

            emit CompoundedReward(oldBalance, balances[msg.sender]);
        }
    }
}

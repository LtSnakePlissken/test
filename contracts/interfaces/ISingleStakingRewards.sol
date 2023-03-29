// SPDX-License-Identifier: BUSL-1.1
//
// Copyright (c) 2023 ElkLabs
// License terms: https://github.com/elkfinance/faas/blob/main/LICENSE
//
// Authors:
// - Seth <seth@elklabs.org>
// - Baal <baal@elklabs.org>

pragma solidity >=0.8.0;

import "./IStakingRewards.sol";

interface ISingleStakingRewards is IStakingRewards {
    event CompoundedReward(uint256 oldBalance, uint256 newBalance);

    function compoundSingleStakingRewards() external;
}

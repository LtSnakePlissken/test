// SPDX-License-Identifier: BUSL-1.1
//
// Copyright (c) 2023 ElkLabs
// License terms: https://github.com/elkfinance/faas/blob/main/LICENSE
//
// Authors:
// - Seth <seth@elklabs.org>
// - Baal <baal@elklabs.org>

pragma solidity >=0.8.0;

import "./IStakingFee.sol";

interface IStakingRewards is IStakingFee {
    /* ========== STATE VARIABLES ========== */

    function rewardTokens(uint256) external view returns (IERC20);

    function rewardTokenAddresses(address _rewardAddress) external view returns (bool);

    function periodFinish() external view returns (uint256);

    function rewardsDuration() external view returns (uint256);

    function lastUpdateTime() external view returns (uint256);

    function rewardRates(address _rewardAddress) external view returns (uint256);

    function rewardPerTokenStored(address _rewardAddress) external view returns (uint256);

    // wallet address => token address => amount
    function userRewardPerTokenPaid(address _walletAddress, address _tokenAddress) external view returns (uint256);

    function rewards(address _walletAddress, address _tokenAddress) external view returns (uint256);

    /* ========== VIEWS ========== */

    function lastTimeRewardApplicable() external view returns (uint256);

    function rewardPerToken(address _tokenAddress) external view returns (uint256);

    function earned(address _tokenAddress, address _account) external view returns (uint256);

    /* ========== MUTATIVE FUNCTIONS ========== */

    function getReward(address _tokenAddress, address _recipient) external;

    function getRewards(address _recipient) external;

    // Must send reward before calling this!
    function startEmission(uint256[] memory _rewards, uint256 _duration) external;

    function stopEmission(address _refundAddress) external;

    function recoverLeftoverReward(address _tokenAddress, address _recipient) external;

    function addRewardToken(address _tokenAddress) external;

    function rewardTokenIndex(address _tokenAddress) external view returns (int8);

    /* ========== EVENTS ========== */

    // Emitted when a reward is paid to an account
    event RewardPaid(address indexed _token, address indexed _account, uint256 _reward);

    // Emitted when a leftover reward is recovered
    event LeftoverRewardRecovered(address indexed _recipient, uint256 _amount);

    // Emitted when rewards emission is started
    event RewardsEmissionStarted(uint256[] _rewards, uint256 _duration);

    // Emitted when rewards emission ends
    event RewardsEmissionEnded();
}

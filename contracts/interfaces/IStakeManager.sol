// SPDX-License-Identifier: BUSL-1.1
//
// Copyright (c) 2023 ElkLabs
// License terms: https://github.com/elkfinance/faas/blob/main/LICENSE
//
// Authors:
// - Seth <seth@elklabs.org>
// - Baal <baal@elklabs.org>

pragma solidity >=0.8.0;

interface IStakeManager {
    event FarmFactorySet(address _factoryAddress);
    event RewardsReceived(address _farm);

    function setFarmFactory(address _factoryAddress) external;

    function startEmission(address _stakeAddress, uint256[] memory _rewards, uint256 _duration) external;

    function stopEmission(address _stakeAddress) external;

    function recoverLeftoverReward(address _stakeAddress, address _tokenAddress) external;

    function addRewardToken(address _stakeAddress, address _tokenAddress) external;

    function recoverERC20(address _stakeAddress, address _tokenAddress, uint256 _amount) external;

    function recoverFees(address _stakeAddress) external;

    function multiClaim(address[] memory _farms) external;
}

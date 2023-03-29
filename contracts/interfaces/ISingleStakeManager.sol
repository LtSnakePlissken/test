// SPDX-License-Identifier: BUSL-1.1
//
// Copyright (c) 2023 ElkLabs
// License terms: https://github.com/elkfinance/faas/blob/main/LICENSE
//
// Authors:
// - Seth <seth@elklabs.org>
// - Baal <baal@elklabs.org>

pragma solidity >=0.8.0;

interface ISingleStakeManager {
    event FarmFactorySet(address _factoryAddress);
    event RewardsReceived(address _farm);

    function setFarmFactory(address _factoryAddress) external;

    function startEmission(
        address _singleStakeAddress,
        uint256[] memory _rewards,
        uint256 _duration
    ) external;

    function stopEmission(address _singleStakeAddress) external;

    function recoverLeftoverReward(
        address _singleStakeAddress,
        address _tokenAddress
    ) external;

    function addRewardToken(
        address _singleStakeAddress,
        address _tokenAddress
    ) external;

    function recoverERC20(
        address _singleStakeAddress,
        address _tokenAddress,
        uint256 _amount
    ) external;

    function setFees(
        address _singleStakeAddress,
        uint16 _depositFeeBps,
        uint16[] memory _withdrawalFeesBps,
        uint32[] memory _withdrawalFeeSchedule
    ) external;

    function recoverFees(address _singleStakeAddress) external;

    function multiClaim(address[] memory _farms) external;
}

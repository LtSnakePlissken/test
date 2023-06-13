// SPDX-License-Identifier: BUSL-1.1
//
// Copyright (c) 2023 ElkLabs
// License terms: https://github.com/elkfinance/faas/blob/main/LICENSE
//
// Authors:
// - Seth <seth@elklabs.org>
// - Baal <baal@elklabs.org>

pragma solidity >=0.8.0;

interface IElkV2FarmManager {
    event FarmFactorySet(address factoryAddress);
    event RewardsReceived(address farm);

    function setFarmFactory(address _factoryAddress) external;

    function startEmissionWithCoverage(
        address _farmAddress,
        uint256[] memory _rewards,
        uint256 _coverage,
        uint256 _duration
    ) external;

    function startEmission(address _farmAddress, uint256[] memory _rewards, uint256 _duration) external;

    function stopEmission(address _farmAddress) external;

    function recoverERC20(address _farmAddress, address _tokenAddress, uint256 _amount) external;

    function recoverLeftoverReward(address _farmAddress, address _tokenAddress) external;

    function addRewardToken(address _farmAddress, address _tokenAddress) external;

    function recoverLeftoverCoverage(address _farmAddress) external;

    function recoverFees(address _farmAddress) external;

    function multiClaim(address[] memory _farms) external;
}

// SPDX-License-Identifier: BUSL-1.1
//
// Copyright (c) 2023 ElkLabs
// License terms: https://github.com/elkfinance/faas/blob/main/LICENSE
//
// Authors:
// - Seth <seth@elklabs.org>
// - Baal <baal@elklabs.org>

pragma solidity >=0.8.0;

interface IStakeFactory {
    event ContractCreated(address _newContract);
    event ManagerSet(address _farmManager);
    event FeeSet(uint256 _newFee);
    event FeesRecovered(uint256 _balanceRecovered);

    function getStake(address _creator, address _stakingToken) external view returns (address);

    function allFarms(uint _index) external view returns (address);

    function farmManager() external view returns (address);

    function getCreator(address _farmAddress) external view returns (address);

    function fee() external view returns (uint256);

    function maxFee() external view returns (uint256);

    function createNewStake(
        address _stakingTokenAddress,
        address[] memory _rewardTokenAddresses,
        uint256 _rewardsDuration,
        uint16 _depositFeeBps,
        uint16[] memory _withdrawalFeesBps,
        uint32[] memory _withdrawalFeeSchedule
    ) external;

    function allFarmsLength() external view returns (uint);

    function setManager(address _managerAddress) external;

    function setFee(uint256 _newFee) external;

    function withdrawFees() external;

    function overrideOwnership(address _farmAddress) external;
}

// SPDX-License-Identifier: BUSL-1.1
//
// Copyright (c) 2023 ElkLabs
// License terms: https://github.com/elkfinance/faas/blob/main/LICENSE
//
// Authors:
// - Seth <seth@elklabs.org>
// - Baal <baal@elklabs.org>

pragma solidity >=0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IElkV2FarmFactory {
    event ContractCreated(address _newContract);
    event ManagerSet(address _farmManager);
    event FeeSet(uint256 _newFee);
    event FeesRecovered(uint256 _balanceRecovered);

    function getFarm(address _creator, address _lpTokenAddress) external view returns (address);

    function getPermissionedFarm(address _creator, address _lpTokenAddress) external view returns (address);

    function isFarm(address _farmAddress) external view returns (bool);

    function isPermissionedFarm(address _farmAddress) external view returns (bool);

    function allFarms(uint _index) external view returns (address);

    function allFarmsLength() external view returns (uint256);

    function farmManager() external view returns (address);

    function getCreator(address _farmAddress) external view returns (address);

    function feeToken() external view returns (IERC20);

    function fee() external view returns (uint256);

    function maxFee() external view returns (uint256);

    function createNewRewards(
        address _oracleAddress,
        address _lpTokenAddress,
        address _coverageTokenAddress,
        uint256 _coverageAmount,
        uint32 _coverageVestingDuration,
        address[] memory _rewardTokenAddresses,
        uint256 _rewardsDuration,
        uint16 _depositFeeBps,
        uint16[] memory _withdrawalFeesBps,
        uint32[] memory _withdrawalFeeSchedule
    ) external;

    function createNewPermissonedRewards(
        address _oracleAddress,
        address _lpTokenAddress,
        address _coverageTokenAddress,
        uint256 _coverageAmount,
        uint32 _coverageVestingDuration,
        address[] memory _rewardTokenAddresses,
        uint256 _rewardsDuration,
        uint16 _depositFeeBps,
        uint16[] memory _withdrawalFeesBps,
        uint32[] memory _withdrawalFeeSchedule
    ) external;

    function setManager(address _managerAddress) external;

    function setFee(uint256 _newFee) external;

    function withdrawFees() external;

    function overrideOwnership(address _farmAddress) external;
}

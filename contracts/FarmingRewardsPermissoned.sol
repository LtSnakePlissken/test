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

import "./interfaces/IFarmingRewardsPermissioned.sol";
import "./FarmingRewards.sol";

/**
 * Contract enabling staking permissions for FarmingRewards.
 */
contract FarmingRewardsPermissioned is
    FarmingRewards,
    IFarmingRewardsPermissioned
{
    mapping(address => bool) public permittedAddresses;

    /* ========== CONSTRUCTOR ========== */

    /**
     * @param _oracleAddress address of the price oracle
     * @param _lpTokenAddress address of the staking LP token (must be an ElkDex LP)
     * @param _coverageTokenAddress address of the token that the coverage is paid in
     * @param _coverageAmount total amount of coverage
     * @param _coverageVestingDuration time it takes to vest 100% of the coverage (min. 1 day)
     * @param _rewardTokenAddresses addresses the reward tokens (must be ERC20)
     * @param _rewardsDuration reward emission duration
     * @param _depositFeeBps deposit fee in basis points
     * @param _withdrawalFeesBps aligned to fee schedule
     * @param _withdrawalFeeSchedule assumes a sorted array
     */
    constructor(
        address _oracleAddress, // address of the price oracle
        address _lpTokenAddress, // address of the staking LP token (must be an ElkDex LP)
        address _coverageTokenAddress, // address of the token that the coverage is paid in
        uint256 _coverageAmount, // total amount of coverage
        uint32 _coverageVestingDuration, // time it takes to vest 100% of the coverage (min. 1 day)
        address[] memory _rewardTokenAddresses, // addresses the reward tokens (must be ERC20)
        uint256 _rewardsDuration, // reward emission duration
        uint16 _depositFeeBps, // deposit fee in basis points
        uint16[] memory _withdrawalFeesBps, // aligned to fee schedule
        uint32[] memory _withdrawalFeeSchedule // assumes a sorted array
    )
        FarmingRewards(
            _oracleAddress,
            _lpTokenAddress,
            _coverageTokenAddress,
            _coverageAmount,
            _coverageVestingDuration,
            _rewardTokenAddresses,
            _rewardsDuration,
            _depositFeeBps,
            _withdrawalFeesBps,
            _withdrawalFeeSchedule
        )
    {}

    /**
     * @notice set permission for an address
     * @param _walletAddress wallet address to set permission for
     * @param _permission permission to set
     */
    function setAddressPermission(
        address _walletAddress,
        bool _permission
    ) external onlyOwner {
        permittedAddresses[_walletAddress] = _permission;
    }

    /**
     * @dev Override _beforeStake() hook to ensure address is permitted to stake
     */
    function _beforeStake(
        address _account,
        uint256 _amount
    ) internal virtual override returns (uint256) {
        require(permittedAddresses[_account], "E25");
        return super._beforeStake(_account, _amount);
    }
}

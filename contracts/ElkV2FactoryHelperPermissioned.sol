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

import "./ElkV2FarmingRewardsPermissoned.sol";

/**
 * @title Library containing a helper function that creates new FarmingRewards contracts in the ElkFarmFactory. It was separated out due to contract size limitations.  Farm manager address must be passed in so that the ownership is always transfered to the FarmManager contract.
 */
library ElkV2FactoryHelperPermissioned {
    /**
     * @notice generates a permissioned FarmingRewards contract and transfers ownership to the provided farm manager
     * @param _abi the abi of the FarmingRewards contract
     * @param _salt the salt used to create the contract
     * @param _farmManager the address of the farm manager
     */
    function createFarmContract(
        bytes memory _abi,
        bytes32 _salt,
        address _farmManager
    ) external returns (address addr) {
        bytes memory bytecode = abi.encodePacked(type(ElkV2FarmingRewardsPermissioned).creationCode, _abi);

        assembly {
            addr := create2(0, add(bytecode, 0x20), mload(bytecode), _salt)
            if iszero(extcodesize(addr)) {
                revert(0, 0)
            }
        }

        ElkV2FarmingRewardsPermissioned(addr).transferOwnership(_farmManager);
    }
}

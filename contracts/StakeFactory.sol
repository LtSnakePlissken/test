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
// - Real-Hansolo <real-hansolo@elklabs.org>

pragma solidity >=0.8.0;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { SafeERC20 } from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { StakingRewards } from "./StakingRewards.sol";
import { IStakeFactory } from "./interfaces/IStakeFactory.sol";

/**
 * Contract that is used by users to create StakingRewards contracts.
 * It stores each farm as it's created, as well as the current owner of each farm.
 * It also contains various uitlity functions for use by Elk.
 */
contract StakeFactory is IStakeFactory, Ownable {
    using SafeERC20 for IERC20;

    /* ========== STATE VARIABLES ========== */

    /// @notice The address of the StakingRewards contract for each farm.
    mapping(address creator => mapping(address stakingTokenAddress => address farmAddress)) public override getStake;

    /// @notice The address of each farm for each creator.
    address[] public override allFarms;

    /// @notice The address of the farm manager.
    address public override farmManager;

    /// @notice The address of the creator of a given farm.
    mapping(address farmAddress => address creator) public override getCreator;

    /// @notice The address of the ElkToken contract.
    IERC20 public feeToken = IERC20(0xeEeEEb57642040bE42185f49C52F7E9B38f8eeeE);

    /// @notice fee amount for creating a farm;
    uint256 public fee = 1000 ether;

    /// @notice max allowed fee in ElkToken
    uint256 public maxFee = 1000000 ether;

    /* ========== CONSTRUCTOR ========== */

    constructor() {}

    /**
     * @notice Creates a new StakingRewards contract, stores the farm address by
       creator and the given LP token.
     * @notice stores the creator of the contract by the new farm address.  This
       is where the fee is taken from the user.
     * @param _stakingTokenAddress The address of the LP token to be staked.
     * @param _rewardTokenAddresses The addresses of the reward tokens to be
       distributed.
     * @param _rewardsDuration The duration of the rewards period.
     * @param _depositFeeBps The deposit fee in basis points.
     * @param _withdrawalFeesBps The withdrawal fee in basis points.
     * @param _withdrawalFeeSchedule The schedule for the withdrawal fee.
     */
    function createNewStake(
        address _stakingTokenAddress,
        address[] memory _rewardTokenAddresses,
        uint256 _rewardsDuration,
        uint16 _depositFeeBps,
        uint16[] memory _withdrawalFeesBps,
        uint32[] memory _withdrawalFeeSchedule
    ) public override {
        // single check is sufficient
        require(getStake[msg.sender][_stakingTokenAddress] == address(0), "StakeFactory: FARM_EXISTS");
        bytes memory creationCode = type(StakingRewards).creationCode;
        bytes memory bytecode = abi.encodePacked(
            creationCode,
            abi.encode(
                _stakingTokenAddress,
                _rewardTokenAddresses,
                _rewardsDuration,
                _depositFeeBps,
                _withdrawalFeesBps,
                _withdrawalFeeSchedule
            )
        );
        address addr;
        bytes32 salt = keccak256(abi.encodePacked(_stakingTokenAddress, msg.sender));

        assembly {
            addr := create2(0, add(bytecode, 0x20), mload(bytecode), salt)
            if iszero(extcodesize(addr)) {
                revert(0, 0)
            }
        }

        getStake[msg.sender][_stakingTokenAddress] = addr;
        getCreator[addr] = msg.sender;
        allFarms.push(addr);

        StakingRewards(addr).transferOwnership(farmManager);

        _takeFee();

        emit ContractCreated(addr);
    }

    /**
     * @return the number of singe staking contracts created
     */
    function allFarmsLength() external view override returns (uint) {
        return allFarms.length;
    }

    /**
     * @notice Utility function to be used by Elk. Changes which manager
       contract will be assigned ownership of each farm on creation.
     * @notice This is available in case any updates are made to the
       StakeManager contract.
     * @dev Ownership is not changed retroactively, so any created farms will
       always have the same manager contract.
     * @param _managerAddress The address of the new manager contract.
     */
    function setManager(address _managerAddress) external override onlyOwner {
        require(_managerAddress != address(0), "StakeFactory: ZERO_ADDRESS");
        farmManager = _managerAddress;
        emit ManagerSet(_managerAddress);
    }

    /**
     * @notice Takes fee for contract creation.
     * @dev StakeFactory must be approved to spend the feeToken before creating a new farm.
     */
    function _takeFee() private {
        require(feeToken.balanceOf(msg.sender) >= fee, "StakeFactory: INSUFFICIENT_BALANCE");
        feeToken.safeTransferFrom(msg.sender, address(this), fee);
    }

    /**
     * @notice Utility function used by Elk to change the fee amount charged on contract creation.
     * @dev Can never be more than the maxFee set stored in the contract.
     * @param _newFee The new fee amount.
     */
    function setFee(uint256 _newFee) external onlyOwner {
        require(_newFee < maxFee, "StakeFactory: FEE_TOO_HIGH");
        fee = _newFee;
        emit FeeSet(_newFee);
    }

    /**
     * @notice Utility function used by Elk to recover the fees gathered by the factory.
     */
    function withdrawFees() external onlyOwner {
        uint256 balance = feeToken.balanceOf(address(this));
        feeToken.safeTransfer(msg.sender, balance);
        emit FeesRecovered(balance);
    }

    /**
     * @notice Override ownership of a farm, only used by Elk.
     * @param _farmAddress The address of the farm to be changed.
     */
    function overrideOwnership(address _farmAddress) external onlyOwner {
        _transferFarmOwnership(_farmAddress, msg.sender);
    }

    /**
     * @notice Transfer ownership of a farm (only possible from current owner).
     * @param _farmAddress The address of the farm to be changed.
     * @param _newOwner The address of the new farm owner.
     */
    function transferFarmOwnership(address _farmAddress, address _newOwner) external {
        require(msg.sender == getCreator[_farmAddress], "StakeFactory: NOT_OWNER");
        _transferFarmOwnership(_farmAddress, _newOwner);
    }

    /**
     * @notice Private function that performs a transfer of ownership for a farm.
     */
    function _transferFarmOwnership(address _farmAddress, address _newOwner) private {
        address creatorAddress = getCreator[_farmAddress];

        require(creatorAddress != address(0), "StakeFactory: UNKNOWN_FARM");

        StakingRewards rewardsContract = StakingRewards(_farmAddress);
        address stakingToken = address(rewardsContract.stakingToken());

        getStake[creatorAddress][stakingToken] = address(0);
        getStake[_newOwner][stakingToken] = _farmAddress;
        getCreator[_farmAddress] = _newOwner;
    }
}

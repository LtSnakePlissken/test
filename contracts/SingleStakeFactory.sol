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

import "@openzeppelin/contracts@4.8.0/access/Ownable.sol";
import "@openzeppelin/contracts@4.8.0/token/ERC20/utils/SafeERC20.sol";
import "./SingleStakingRewards.sol";
import "./interfaces/ISingleStakeFactory.sol";

/**
 * Contract that is used by users to create SingleStakingRewards contracts.
 * It stores each farm as it's created, as well as the current owner of each farm.
 * It also contains various uitlity functions for use by Elk.
 */
contract ElkSingleStakeFactory is ISingleStakeFactory, Ownable {
    using SafeERC20 for IERC20;

    /* ========== STATE VARIABLES ========== */

    /// @notice The address of the SingleStakingRewards contract for each farm.
    mapping(address => mapping(address => address)) public override getSingleStake;

    /// @notice The address of each farm for each creator.
    address[] public override allFarms;

    /// @notice The address of the farm manager.
    address public override farmManager;

    /// @notice The address of the creator of a given farm.
    mapping(address => address) public override getCreator;

    /// @notice The address of the ElkToken contract.
    IERC20 feeToken = IERC20(0xeEeEEb57642040bE42185f49C52F7E9B38f8eeeE);

    /// @notice fee amount for creating a farm;
    uint256 public fee = 1000 * 10 ** 18;

    /// @notice max allowed fee in ElkToken
    uint256 public maxFee = 1000000 * 10 ** 18;

    /* ========== CONSTRUCTOR ========== */

    constructor() {}

    /**
     * @notice Creates a new SingleStakingRewards contract, stores the farm address by creator and the given LP token.
     * @notice stores the creator of the contract by the new farm address.  This is where the fee is taken from the user.
     * @param _stakingTokenAddress The address of the LP token to be staked.
     * @param _rewardTokenAddresses The addresses of the reward tokens to be distributed.
     * @param _rewardsDuration The duration of the rewards period.
     * @param _depositFeeBps The deposit fee in basis points.
     * @param _withdrawalFeesBps The withdrawal fee in basis points.
     * @param _withdrawalFeeSchedule The schedule for the withdrawal fee.
     */
    function createNewSingleStake(
        address _stakingTokenAddress,
        address[] memory _rewardTokenAddresses,
        uint256 _rewardsDuration,
        uint16 _depositFeeBps,
        uint16[] memory _withdrawalFeesBps,
        uint32[] memory _withdrawalFeeSchedule
    ) public override {
        require(
            getSingleStake[msg.sender][_stakingTokenAddress] == address(0),
            "Elk: FARM_EXISTS"
        ); // single check is sufficient

        bytes memory creationCode = type(SingleStakingRewards).creationCode;
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
        bytes32 salt = keccak256(
            abi.encodePacked(_stakingTokenAddress, msg.sender)
        );

        assembly {
            addr := create2(0, add(bytecode, 0x20), mload(bytecode), salt)
            if iszero(extcodesize(addr)) {
                revert(0, 0)
            }
        }

        getSingleStake[msg.sender][_stakingTokenAddress] = addr;
        getCreator[addr] = msg.sender;
        allFarms.push(addr);

        SingleStakingRewards(addr).transferOwnership(farmManager);

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
     * @notice Utility function to be used by Elk. Changes which manager contract will be assigned ownership of each farm on creation.
     * @notice This is available in case any updates are made to the SingleStakeManager contract.
     * @dev Ownership is not changed retroactively, so any created farms will always have the same manager contract.
     * @param _managerAddress The address of the new manager contract.
     */
    function setManager(address _managerAddress) external override onlyOwner {
        require(
            _managerAddress != address(0),
            "managerAddress is the zero address"
        );
        farmManager = _managerAddress;
        emit ManagerSet(_managerAddress);
    }

    /**
     * @notice Takes fee for contract creation.
     * @dev SingleStakeFactory must be approved to spend the feeToken before creating a new farm.
     */
    function _takeFee() private {
        require(
            feeToken.balanceOf(msg.sender) >= fee,
            "Creator cannot pay fee"
        );
        feeToken.safeTransferFrom(msg.sender, address(this), fee);
    }

    /**
     * @notice Utility function used by Elk to change the fee amount charged on contract creation.
     * @dev Can never be more than the maxFee set stored in the contract.
     * @param _newFee The new fee amount.
     */
    function setFee(uint256 _newFee) external onlyOwner {
        require(_newFee < maxFee, "Fee cannot be greater than max allowed");
        fee = _newFee;
        emit FeeSet(_newFee);
    }

    /**
     * @notice Utility function used by Elk to recover the fees gathered by the factory.
     */
    function withdrawFees() external onlyOwner {
        _withdrawFees();
    }

    /**
     * @notice Change ownership of a farm
     * @param _farmAddress The address of the farm to be transferred.
     */
    function overrideOwnership(address _farmAddress) external onlyOwner {
        _overrideOwnership(_farmAddress);
    }

    function _withdrawFees() private {
        uint256 balance = feeToken.balanceOf(address(this));
        feeToken.safeTransfer(msg.sender, balance);
        emit FeesRecovered(balance);
    }

    /**
     * @notice This function is available to FaaS governance in case any "Scam" or nefarious farms are created using the contract. Governance will be able to stop the offending farm and allow users to recover funds.
     * @param _farmAddress The address of the farm to be stopped.
     */
    function _overrideOwnership(address _farmAddress) private {
        address creatorAddress = getCreator[_farmAddress];

        require(creatorAddress != msg.sender, "Contract is already overriden");
        require(creatorAddress != address(0), "Address is not a known farm");

        SingleStakingRewards rewardsContract = SingleStakingRewards(
            _farmAddress
        );
        address stakingToken = address(rewardsContract.stakingToken());

        getSingleStake[creatorAddress][stakingToken] = address(0);
        getSingleStake[msg.sender][stakingToken] = _farmAddress;
        getCreator[_farmAddress] = msg.sender;
    }
}

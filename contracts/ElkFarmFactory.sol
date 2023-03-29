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
import "@openzeppelin/contracts@4.8.0/token/ERC20/IERC20.sol";
import "./interfaces/IElkFarmFactory.sol";
import "./interfaces/IFarmingRewards.sol";
import "./interfaces/IFarmingRewardsPermissioned.sol";
import "./ElkFactoryHelper.sol";
import "./ElkFactoryHelperPermissioned.sol";

/**
 * Contract that is used by users to create FarmingRewards contracts.
 * It stores each farm as it's created, as well as the current owner of each farm.
 * It also contains various uitlity functions for use by Elk.
 */
contract ElkFarmFactory is IElkFarmFactory, Ownable {
    /* ========== STATE VARIABLES ========== */

    /// @notice get list of farms associated with address
    mapping(address => mapping(address => address)) public getFarm;

    /// @notice get list of permissioned farms
    mapping(address => mapping(address => address)) public getPermissionedFarm;

    /// @notice check if given address is a farm
    mapping(address => bool) public isFarm;

    /// @notice check if given address is a permissioned farm
    mapping(address => bool) public isPermissionedFarm;

    /// @notice all farms associated with contract;
    address[] public allFarms;

    /// @notice address of farm manager
    address public farmManager;

    /// @notice get address of farm creator
    mapping(address => address) public getCreator;

    /// @notice ELK token
    IERC20 public feeToken = IERC20(0xeEeEEb57642040bE42185f49C52F7E9B38f8eeeE);

    /// @notice fee in feeToken.
    uint256 public fee = 1000 * 10 ** 18;

    /// @notice maximum allowed fee.
    uint256 public maxFee = 10000000 * 10 ** 18;

    /// @notice oracle address
    address public oracleAddress;

    constructor(address _oracleAddress) {
        require(_oracleAddress != address(0), "NO");
        oracleAddress = _oracleAddress;
    }

    /**
     * @notice Main function in the contract. Creates a new FarmingRewards contract, stores the farm address by creator and the given LP token, and also stores the creator of the contract by the new farm address.  This is where the fee is taken from the user.
     * @dev each user is only able to create one FarmingRewards contract per LP token.
     * @param _lpTokenAddress The address of the LP token contract.
     * @param _coverageTokenAddress The address of the ILP coverage token contract.
     * @param _coverageAmount The amount of ILP coverage tokens to be distributed.
     * @param _coverageVestingDuration The duration of the vesting period for the ILP coverage tokens.
     * @param _rewardTokenAddresses The addresses of the reward tokens to be distributed.
     * @param _rewardsDuration The duration of the rewards period.
     * @param _depositFeeBps The deposit fee in basis points.
     * @param _withdrawalFeesBps The withdrawal fees in basis points.
     * @param _withdrawalFeeSchedule The schedule for the withdrawal fees.
     */
    function createNewRewards(
        address _lpTokenAddress,
        address _coverageTokenAddress,
        uint256 _coverageAmount,
        uint32 _coverageVestingDuration,
        address[] memory _rewardTokenAddresses,
        uint256 _rewardsDuration,
        uint16 _depositFeeBps,
        uint16[] memory _withdrawalFeesBps,
        uint32[] memory _withdrawalFeeSchedule
    ) public {
        require(
            getFarm[msg.sender][_lpTokenAddress] == address(0),
            "FE"
        ); // single check is sufficient

        bytes memory abiCode = abi.encode(
            oracleAddress,
            _lpTokenAddress,
            _coverageTokenAddress,
            _coverageAmount,
            _coverageVestingDuration,
            _rewardTokenAddresses,
            _rewardsDuration,
            _depositFeeBps,
            _withdrawalFeesBps,
            _withdrawalFeeSchedule
        );
        bytes32 salt = keccak256(abi.encodePacked(_lpTokenAddress, msg.sender));

        _takeFee();

        address addr = ElkFactoryHelper.createFarmContract(
            abiCode,
            salt,
            farmManager
        );

        isFarm[addr] = true;
        getFarm[msg.sender][_lpTokenAddress] = addr;
        getCreator[addr] = msg.sender;
        allFarms.push(addr);

        emit ContractCreated(addr);
    }

    /**
     * @notice Creates a new PermissionedFarmingRewards contract, stores the farm address by creator and the given LP token, and also stores the creator of the contract by the new farm address.  This is where the fee is taken from the user.
     * @dev each user is only able to create one FarmingRewards contract per LP token.
     * @param _lpTokenAddress The address of the LP token contract.
     * @param _coverageTokenAddress The address of the ILP coverage token contract.
     * @param _coverageAmount The amount of ILP coverage tokens to be distributed.
     * @param _coverageVestingDuration The duration of the vesting period for the ILP coverage tokens.
     * @param _rewardTokenAddresses The addresses of the reward tokens to be distributed.
     * @param _rewardsDuration The duration of the rewards period.
     * @param _depositFeeBps The deposit fee in basis points.
     * @param _withdrawalFeesBps The withdrawal fees in basis points.
     * @param _withdrawalFeeSchedule The schedule for the withdrawal fees.
     */
    function createNewPermissonedRewards(
        address _lpTokenAddress,
        address _coverageTokenAddress,
        uint256 _coverageAmount,
        uint32 _coverageVestingDuration,
        address[] memory _rewardTokenAddresses,
        uint256 _rewardsDuration,
        uint16 _depositFeeBps,
        uint16[] memory _withdrawalFeesBps,
        uint32[] memory _withdrawalFeeSchedule
    ) public {
        require(
            getPermissionedFarm[msg.sender][_lpTokenAddress] == address(0),
            "PE"
        ); // single check is sufficient

        bytes memory abiCode = abi.encode(
            oracleAddress,
            _lpTokenAddress,
            _coverageTokenAddress,
            _coverageAmount,
            _coverageVestingDuration,
            _rewardTokenAddresses,
            _rewardsDuration,
            _depositFeeBps,
            _withdrawalFeesBps,
            _withdrawalFeeSchedule
        );
        bytes32 salt = keccak256(abi.encodePacked(_lpTokenAddress, msg.sender));

        _takeFee();

        address addr = ElkFactoryHelperPermissioned.createFarmContract(
            abiCode,
            salt,
            farmManager
        );

        isPermissionedFarm[addr] = true;
        getPermissionedFarm[msg.sender][_lpTokenAddress] = addr;
        getCreator[addr] = msg.sender;
        allFarms.push(addr);

        emit ContractCreated(addr);
    }

    /**
     * @return the number of farms created
     */
    function allFarmsLength() external view override returns (uint) {
        return allFarms.length;
    }

    /**
     * @notice Utility function to be used by Elk.  Changes which manager contract will be assigned ownership of each farm on creation. This is available in case any updates are made to the FarmManager contract.  Ownership is not changed retroactively, so any created farms will always have the same manager contract.
     * @param _managerAddress The address of the new manager contract.
     * @notice emits a ManagerSet event with the new manager address.
     */
    function setManager(address _managerAddress) external override onlyOwner {
        require(_managerAddress != address(0), "NM");
        farmManager = _managerAddress;
        emit ManagerSet(_managerAddress);
    }

    /**
     * @notice Takes fee for contract creation. Factory must be approved to spend the feeToken before creating a new farm.
     */
    function _takeFee() private {
        require(
            feeToken.balanceOf(msg.sender) >= fee,
            "NB"
        );
        feeToken.transferFrom(msg.sender, address(this), fee);
    }

    /**
     * @notice Utility function used by Elk to change the fee amount charged on contract creation.  Can never be more than the maxFee set stored in the contract.
     * @param _newFee The new fee amount.
     * @notice emits a FeeSet event with the new fee amount.
     */
    function setFee(uint256 _newFee) external onlyOwner {
        require(_newFee < maxFee, "IF");
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
     * @notice Utility function used by Elk to recover the fees gathered by the factory.
     * @notice emits a FeesRecovered event with the amount recovered.
     */
    function _withdrawFees() private {
        uint256 balance = feeToken.balanceOf(address(this));
        feeToken.transfer(msg.sender, balance);
        emit FeesRecovered(balance);
    }

    /**
     * @notice Change ownership of a farm, only used by Elk.
     * @param _farmAddress The address of the farm to be changed.
     */
    function overrideOwnership(address _farmAddress) external onlyOwner {
        _overrideOwnership(_farmAddress);
    }

    /**
     * @dev This function is available to FaaS governance in case any "Scam" or nefarious farms are created using the contract. Governance will be able to stop the offending farm and allow users to recover funds.
     * @param _farmAddress The address of the farm to be stopped.
     */
    function _overrideOwnership(address _farmAddress) private {
        require(
            isFarm[_farmAddress] || isPermissionedFarm[_farmAddress],
            "NF1"
        );

        address creatorAddress = getCreator[_farmAddress];

        require(creatorAddress != msg.sender, "NF2");
        require(creatorAddress != address(0), "NF3");

        IFarmingRewards rewardsContract = IFarmingRewards(_farmAddress);
        address lpTokenAddress = address(rewardsContract.stakingToken());

        if (isFarm[_farmAddress]) {
            // allows creator to make another farm with same staking token, should we prevent this somehow?
            getFarm[creatorAddress][lpTokenAddress] = address(0);
            getFarm[msg.sender][lpTokenAddress] = _farmAddress;
            getCreator[_farmAddress] = msg.sender;
        } else {
            getPermissionedFarm[creatorAddress][lpTokenAddress] = address(0);
            getPermissionedFarm[msg.sender][lpTokenAddress] = _farmAddress;
            getCreator[_farmAddress] = msg.sender;
        }
    }
}

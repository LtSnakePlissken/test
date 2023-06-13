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

import "./Staking.sol";
import "./interfaces/IStakingFee.sol";

/**
 * Contract implementing simple ERC20 token staking functionality and supporting deposit/withdrawal fees (no staking rewards).
 */
contract StakingFee is Staking, IStakingFee {
    using SafeERC20 for IERC20;

    /* ========== STATE VARIABLES ========== */

    /// @notice Constant Fee Unit (1e4)
    uint256 public constant feesUnit = 10000;

    /// @notice Maximum fee (20%)
    uint256 public constant maxFee = 2000;

    /// @notice Schedule of withdrawal fees represented as a sorted array of durations
    /// @dev example: 10% after 1 hour, 1% after a day, 0% after a week => [3600, 86400]
    uint256[] public withdrawalFeeSchedule;

    /// @notice Withdrawal fees described in basis points (fee unit) represented as an array of the same length as withdrawalFeeSchedule
    /// @dev example: 10% after 1 hour, 1% after a day, 0% after a week => [1000, 100]
    uint256[] public withdrawalFeesBps;

    /// @notice Deposit (staking) fee in basis points (fee unit)
    uint256 public depositFeeBps;

    /// @notice Counter of collected fees
    uint256 public collectedFees;

    /// @notice Last staking time for each user
    mapping(address => uint32) public userLastStakedTime;

    /* ========== CONSTRUCTOR ========== */

    /**
     * @param _stakingTokenAddress address of the token used for staking (must be ERC20)
     * @param _depositFeeBps deposit fee in basis points
     * @param _withdrawalFeesBps aligned to fee schedule
     * @param _withdrawalFeeSchedule assumes a sorted array
     */
    constructor(
        address _stakingTokenAddress,
        uint16 _depositFeeBps,
        uint16[] memory _withdrawalFeesBps,
        uint32[] memory _withdrawalFeeSchedule
    ) Staking(_stakingTokenAddress) {
        _setFees(_depositFeeBps, _withdrawalFeesBps, _withdrawalFeeSchedule);
    }

    /* ========== VIEWS ========== */

    /**
     * @dev Calculate the deposit fee for a given amount.
     * @param _depositAmount amount to stake
     * @return fee paid upon deposit
     */
    function depositFee(uint256 _depositAmount) public view returns (uint256) {
        return depositFeeBps > 0 ? (_depositAmount * depositFeeBps) / feesUnit : 0;
    }

    /**
     * @dev Calculate the withdrawal fee for a given amount.
     * @param _account user wallet address
     * @param _withdrawalAmount amount to withdraw
     * @return fee paid upon withdrawal
     */
    function withdrawalFee(address _account, uint256 _withdrawalAmount) public view returns (uint256) {
        uint256 userLastStakedTimestampDiff = block.timestamp - userLastStakedTime[_account];
        uint256 withdrawalFeeAmount;
        for (uint i = 0; i < withdrawalFeeSchedule.length; ++i) {
            if (userLastStakedTimestampDiff < withdrawalFeeSchedule[i]) {
                withdrawalFeeAmount = (_withdrawalAmount * withdrawalFeesBps[i]) / feesUnit;
                break;
            }
        }
        return withdrawalFeeAmount;
    }

    /* ========== RESTRICTED FUNCTIONS ========== */

    /**
     * @dev Recover collected fees held in the contract.
     * Note: privileged function for governance
     * @param _recipient fee recovery address
     */
    function recoverFees(address _recipient) external onlyOwner nonReentrant {
        _beforeRecoverFees(_recipient);
        uint256 previousFees = collectedFees;
        collectedFees = 0;
        emit FeesRecovered(previousFees);
        stakingToken.safeTransfer(_recipient, previousFees);
    }

    /* ========== PRIVATE FUNCTIONS ========== */

    /**
     * @dev Configure the fees for this contract.
     * @param _depositFeeBps deposit fee in basis points
     * @param _withdrawalFeesBps withdrawal fees in basis points
     * @param _withdrawalFeeSchedule withdrawal fees schedule
     */
    function _setFees(
        uint16 _depositFeeBps,
        uint16[] memory _withdrawalFeesBps,
        uint32[] memory _withdrawalFeeSchedule
    ) private {
        require(
            _withdrawalFeeSchedule.length == _withdrawalFeesBps.length &&
                _withdrawalFeeSchedule.length <= 10 &&
                _depositFeeBps <= maxFee,
            "E5"
        );

        uint32 lastFeeSchedule = 0;
        uint256 lastWithdrawalFee = maxFee + 1;

        for (uint i = 0; i < _withdrawalFeeSchedule.length; ++i) {
            require(_withdrawalFeeSchedule[i] > lastFeeSchedule, "E7");
            require(_withdrawalFeesBps[i] < lastWithdrawalFee, "E8");
            lastFeeSchedule = _withdrawalFeeSchedule[i];
            lastWithdrawalFee = _withdrawalFeesBps[i];
        }

        withdrawalFeeSchedule = _withdrawalFeeSchedule;
        withdrawalFeesBps = _withdrawalFeesBps;
        depositFeeBps = _depositFeeBps;

        emit FeesSet(_depositFeeBps, _withdrawalFeesBps, _withdrawalFeeSchedule);
    }

    /* ========== HOOKS ========== */

    /**
     * @dev Override _beforeStake() hook to collect the deposit fee and update associated state
     */
    function _beforeStake(address _account, uint256 _amount) internal virtual override returns (uint256) {
        uint256 fee = depositFee(_amount);
        userLastStakedTime[_account] = uint32(block.timestamp);
        if (fee > 0) {
            collectedFees += fee;
            emit DepositFeesCollected(_account, fee);
        }
        return super._beforeStake(_account, _amount - fee);
    }

    /**
     * @dev Override _beforeWithdrawl() hook to collect the withdrawal fee and update associated state
     */
    function _beforeWithdraw(address _account, uint256 _amount) internal virtual override returns (uint256) {
        uint256 fee = withdrawalFee(_account, _amount);
        if (fee > 0) {
            collectedFees += fee;
            emit WithdrawalFeesCollected(_account, fee);
        }
        return super._beforeWithdraw(_account, _amount - fee);
    }

    /**
     * @dev Internal hook called before recovering fees (in the recoverFees() function).
     * @param _recipient recovery address
     */
    function _beforeRecoverFees(address _recipient) internal virtual {}
}

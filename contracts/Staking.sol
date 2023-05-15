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
import "@openzeppelin/contracts@4.8.0/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts@4.8.0/token/ERC20/utils/SafeERC20.sol";
import "./interfaces/IStaking.sol";

/**
 * Base contract implementing simple ERC20 token staking functionality (no staking rewards).
 */
contract Staking is ReentrancyGuard, Ownable, IStaking {
    using SafeERC20 for IERC20;

    /* ========== STATE VARIABLES ========== */

    /// @notice Staking token interface
    IERC20 public immutable stakingToken;

    /// @notice Total supply of the staking token
    uint256 public totalSupply;

    /// @notice Account balances
    mapping(address => uint256) public balances;

    /* ========== CONSTRUCTOR ========== */

    /// @param _stakingTokenAddress address of the token used for staking (must be ERC20)
    constructor(address _stakingTokenAddress) {
        require(_stakingTokenAddress != address(0), "E1");
        stakingToken = IERC20(_stakingTokenAddress);
    }

    /**
     * @dev Stake tokens.
     * Note: the contract must have sufficient allowance for the staking token.
     * @param _amount amount to stake
     */
    function stake(uint256 _amount) public nonReentrant {
        uint256 originalAmount = _amount;
        _amount = _beforeStake(msg.sender, _amount);
        require(_amount > 0 && originalAmount > 0, "E2"); // Check after the hook
        totalSupply += _amount;
        balances[msg.sender] += _amount;
        stakingToken.safeTransferFrom(msg.sender, address(this), originalAmount);
        emit Staked(msg.sender, _amount);
    }

    /**
     * @dev Withdraw previously staked tokens.
     * @param _amount amount to withdraw
     */
    function withdraw(uint256 _amount) public nonReentrant {
        uint256 originalAmount = _amount;
        _amount = _beforeWithdraw(msg.sender, _amount);
        require(
            _amount > 0 && _amount <= balances[msg.sender] && originalAmount <= balances[msg.sender],
            "E3"
        ); // Check after the hook
        totalSupply -= originalAmount;
        balances[msg.sender] -= originalAmount;
        stakingToken.safeTransfer(msg.sender, _amount);
        emit Withdrawn(msg.sender, _amount);
    }

    /**
     * @dev Exit the farm, i.e., withdraw the entire token balance of the calling account
     */
    function exit() external {
        _beforeExit(msg.sender);
        withdraw(balances[msg.sender]);
    }

    /* ========== RESTRICTED FUNCTIONS ========== */

    /**
     * @dev Recover ERC20 tokens held in the contract.
     * Note: privileged governance function to recover tokens mistakenly sent to this contract address.
     * This function cannot be used to withdraw staking tokens.
     * @param _tokenAddress address of the token to recover
     * @param _recipient recovery address
     * @param _amount amount to withdraw
     * @ return withdrawn amount (may differ from input amount due to e.g., fees)
     */
    function recoverERC20(
        address _tokenAddress,
        address _recipient,
        uint256 _amount
    ) external nonReentrant onlyOwner {
        require(
            _tokenAddress != address(stakingToken),
            "E4"
        );
        _beforeRecoverERC20(_tokenAddress, _recipient, _amount);
        IERC20 token = IERC20(_tokenAddress);
        token.safeTransfer(_recipient, _amount);
        emit Recovered(_tokenAddress, _recipient, _amount);
    }

    /* ========== HOOKS ========== */

    /**
     * @dev Internal hook called before staking (in the stake() function).
     * @ param _account staker address
     * @param _amount amount being staken
     * @return amount to stake (may be changed by the hook)
     */
    function _beforeStake(
        address /*_account*/,
        uint256 _amount
    ) internal virtual returns (uint256) {
        return _amount;
    }

    /**
     * @dev Internal hook called before withdrawing (in the withdraw() function).
     * @ param _account withdrawer address
     * @param _amount amount being withdrawn
     * @return amount to withdraw (may be changed by the hook)
     */
    function _beforeWithdraw(
        address /*_account*/,
        uint256 _amount
    ) internal virtual returns (uint256) {
        return _amount;
    }

    /**
     * @dev Internal hook called before exiting (in the exit() function).
     * Note: since exit() calls withdraw() internally, the _beforeWithdraw() hook fill fire too.
     * @param _account address exiting
     */
    function _beforeExit(address _account) internal virtual {}

    /**
     * @dev Internal hook called before recovering tokens (in the recoverERC20() function).
     * @param _tokenAddress address of the token being recovered
     * @param _recipient recovery address
     * @param _amount amount being withdrawn
     */
    function _beforeRecoverERC20(
        address _tokenAddress,
        address _recipient,
        uint256 _amount
    ) internal virtual {}
}

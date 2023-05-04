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

import "./StakingFee.sol";
import "./interfaces/IStakingRewards.sol";

/**
 * Contract implementing simple ERC20 token staking functionality with staking rewards and deposit/withdrawal fees.
 */
contract StakingRewards is StakingFee, IStakingRewards {
    using SafeERC20 for IERC20;

    /* ========== STATE VARIABLES ========== */

    /// @notice List of reward token interfaces
    IERC20[] public rewardTokens;

    /// @notice Reward token addresses (maps every reward token address to true, others to false)
    mapping(address => bool) public rewardTokenAddresses;

    /// @notice Timestamp when rewards stop emitting
    uint256 public periodFinish;

    /// @notice Duration for reward emission
    uint256 public rewardsDuration;

    /// @notice Last time the rewards were updated
    uint256 public lastUpdateTime;

    /// @notice Reward token rates (maps every reward token to an emission rate, i.e., how many tokens emitted per second)
    mapping(address => uint256) public rewardRates;

    /// @notice How many tokens are emitted per staked token
    mapping(address => uint256) public rewardPerTokenStored;

    /// @notice How many reward tokens were paid per user (wallet address => token address => amount)
    mapping(address => mapping(address => uint256))
        public userRewardPerTokenPaid;

    /// @notice Accumulator of reward tokens per user (wallet address => token address => amount)
    mapping(address => mapping(address => uint256)) public rewards;

    /* ========== CONSTRUCTOR ========== */

    /**
     * @param _stakingTokenAddress address of the token used for staking (must be ERC20)
     * @param _rewardTokenAddresses addresses the reward tokens (must be ERC20)
     * @param _rewardsDuration reward emission duration
     * @param _depositFeeBps deposit fee in basis points
     * @param _withdrawalFeesBps aligned to fee schedule
     * @param _withdrawalFeeSchedule assumes a sorted array
     */
    constructor(
        address _stakingTokenAddress,
        address[] memory _rewardTokenAddresses,
        uint256 _rewardsDuration,
        uint16 _depositFeeBps,
        uint16[] memory _withdrawalFeesBps,
        uint32[] memory _withdrawalFeeSchedule
    )
        StakingFee(
            _stakingTokenAddress,
            _depositFeeBps,
            _withdrawalFeesBps,
            _withdrawalFeeSchedule
        )
    {
        require(_rewardTokenAddresses.length > 0, "E9");
        // update reward data structures
        for (uint i = 0; i < _rewardTokenAddresses.length; ++i) {
            address tokenAddress = _rewardTokenAddresses[i];
            _addRewardToken(tokenAddress);
        }
        rewardsDuration = _rewardsDuration;
    }

    /* ========== VIEWS ========== */

    /**
     * @notice Return the last time rewards are applicable (the lowest of the current timestamp and the rewards expiry timestamp).
     * @return timestamp
     */
    function lastTimeRewardApplicable() public view returns (uint256) {
        return block.timestamp < periodFinish ? block.timestamp : periodFinish;
    }

    /**
     * @notice Return the reward per staked token for a given reward token address.
     * @param _tokenAddress reward token address
     * @return amount of reward per staked token
     */
    function rewardPerToken(
        address _tokenAddress
    ) public view returns (uint256) {
        if (totalSupply == 0) {
            return rewardPerTokenStored[_tokenAddress];
        }
        return
            rewardPerTokenStored[_tokenAddress] +
            ((lastTimeRewardApplicable() - lastUpdateTime) *
                rewardRates[_tokenAddress] *
                1e18) /
            totalSupply;
    }

    /**
     * @notice Return the total reward earned by a user for a given reward token address.
     * @param _tokenAddress reward token address
     * @param _account user wallet address
     * @return amount earned
     */
    function earned(
        address _tokenAddress,
        address _account
    ) public view returns (uint256) {
        return
            (balances[_account] *
                (rewardPerToken(_tokenAddress) -
                    userRewardPerTokenPaid[_tokenAddress][_account])) /
            1e18 +
            rewards[_tokenAddress][_account];
    }

    /* ========== MUTATIVE FUNCTIONS ========== */

    /**
     * @dev claim the specified token reward for a staker
     * @param _tokenAddress the address of the reward token
     * @param _recipient the address of the staker that should receive the reward
     * @ return amount of reward received
     */
    function getReward(
        address _tokenAddress,
        address _recipient
    ) public nonReentrant updateRewards(_recipient) {
        return _getReward(_tokenAddress, _recipient);
    }

    /**
     * @dev claim rewards for all the reward tokens for the staker
     * @param _recipient address of the recipient to receive the rewards
     */
    function getRewards(
        address _recipient
    ) public nonReentrant updateRewards(_recipient) {
        for (uint i = 0; i < rewardTokens.length; ++i) {
            _getReward(address(rewardTokens[i]), _recipient);
        }
    }

    /**
     * @dev Start the emission of rewards to stakers. The owner must send reward tokens to the contract before calling this function.
     * Note: Can only be called by owner when the contract is not emitting rewards.
     * @param _rewards array of rewards amounts for each reward token
     * @param _duration duration in seconds for which rewards will be emitted
     */
    function startEmission(
        uint256[] memory _rewards,
        uint256 _duration
    )
        public
        virtual
        nonReentrant
        onlyOwner
        whenNotEmitting
        updateRewards(address(0))
    {
        require(_duration > 0, "E10");
        require(_rewards.length == rewardTokens.length, "E11");

        _beforeStartEmission(_rewards, _duration);

        rewardsDuration = _duration;

        for (uint i = 0; i < rewardTokens.length; ++i) {
            IERC20 token = rewardTokens[i];
            address tokenAddress = address(token);
            rewardRates[tokenAddress] = _rewards[i] / rewardsDuration;

            // Ensure the provided reward amount is not more than the balance in the contract.
            // This keeps the reward rate in the right range, preventing overflows due to
            // very high values of rewardRate in the earned and rewardsPerToken functions;
            // Reward + leftover must be less than 2^256 / 10^18 to avoid overflow.
            uint256 balance = rewardTokens[i].balanceOf(address(this));
            if (tokenAddress != address(stakingToken)) {
                require(
                    rewardRates[tokenAddress] <= balance / rewardsDuration,
                    "E3"
                );
            } else {
                // Handle carefully where rewardsToken is the same as stakingToken (need to subtract total supply)
                require(
                    rewardRates[tokenAddress] <=
                        (balance - totalSupply) / rewardsDuration,
                    "E3"
                );
            }
        }

        lastUpdateTime = block.timestamp;
        periodFinish = block.timestamp + rewardsDuration;

        emit RewardsEmissionStarted(_rewards, _duration);
    }

    /**
     * @dev stop the reward emission process and transfer the remaining reward tokens to a specified address
     * Note: can only be called by owner when the contract is currently emitting rewards
     * @param _refundAddress the address to receive the remaining reward tokens
     */
    function stopEmission(
        address _refundAddress
    ) external nonReentrant onlyOwner whenEmitting {
        _beforeStopEmission(_refundAddress);
        uint256 remaining = 0;
        if (periodFinish > block.timestamp) {
            remaining = periodFinish - block.timestamp;
        }

        periodFinish = block.timestamp;

        for (uint i = 0; i < rewardTokens.length; ++i) {
            IERC20 token = rewardTokens[i];
            address tokenAddress = address(token);
            uint256 refund = rewardRates[tokenAddress] * remaining;
            if (refund > 0) {
                token.safeTransfer(_refundAddress, refund);
            }
        }

        emit RewardsEmissionEnded();
    }

    /**
     * @dev recover leftover reward tokens and transfer them to a specified recipient
     * Note: can only be called by owner when the contract is not emitting rewards
     * @param _tokenAddress address of the reward token to be recovered
     * @param _recipient address to receive the recovered reward tokens
     */
    function recoverLeftoverReward(
        address _tokenAddress,
        address _recipient
    ) external onlyOwner whenNotEmitting {
        require(totalSupply == 0, "E12");
        if (rewardTokenAddresses[_tokenAddress]) {
            _beforeRecoverLeftoverReward(_tokenAddress, _recipient);
            IERC20 token = IERC20(_tokenAddress);
            uint256 amount = token.balanceOf(address(this));
            if (amount > 0) {
                token.safeTransfer(_recipient, amount);
            }
            emit LeftoverRewardRecovered(_recipient, amount);
        }
    }

    /**
     * @dev add a reward token to the contract
     * Note: can only be called by owner when the contract is not emitting rewards
     * @param _tokenAddress address of the new reward token
     */
    function addRewardToken(
        address _tokenAddress
    ) external onlyOwner whenNotEmitting {
        _addRewardToken(_tokenAddress);
    }

    /**
     * @dev Return the array index of the provided token address (if applicable)
     * @param _tokenAddress address of the LP token
     * @return the array index for _tokenAddress or -1 if it is not a reward token
     */
    function rewardTokenIndex(
        address _tokenAddress
    ) public view returns (int8) {
        if (rewardTokenAddresses[_tokenAddress]) {
            for (uint i = 0; i < rewardTokens.length; ++i) {
                if (address(rewardTokens[i]) == _tokenAddress) {
                    return int8(int256(i));
                }
            }
        }
        return -1;
    }

    /* ========== PRIVATE FUNCTIONS ========== */

    /**
     * @dev Get the reward amount of a token for a specific recipient
     * @param _tokenAddress address of the token
     * @param _recipient address of the recipient
     */
    function _getReward(address _tokenAddress, address _recipient) private {
        require(msg.sender == owner() || msg.sender == _recipient, "E14");
        require(rewardTokenAddresses[_tokenAddress], "E13");
        uint256 reward = rewards[_tokenAddress][_recipient];
        if (reward > 0) {
            rewards[_tokenAddress][_recipient] = 0;
            IERC20(_tokenAddress).safeTransfer(_recipient, reward);
            emit RewardPaid(_tokenAddress, _recipient, reward);
        }
    }

    /**
     * @dev Add a token as a reward token
     * @param _tokenAddress address of the token to be added as a reward token
     */
    function _addRewardToken(address _tokenAddress) private {
        require(rewardTokens.length <= 15, "E15");
        require(_tokenAddress != address(0), "E1");
        if (!rewardTokenAddresses[_tokenAddress]) {
            rewardTokens.push(IERC20(_tokenAddress));
            rewardTokenAddresses[_tokenAddress] = true;
        }
    }

    /* ========== HOOKS ========== */

    /**
     * @dev Override _beforeStake() hook to ensure staking is only possible when rewards are emitting
     */
    function _beforeStake(
        address _account,
        uint256 _amount
    ) internal virtual override whenEmitting returns (uint256) {
        return super._beforeStake(_account, _amount);
    }

    /**
     * @dev Override _beforeExit() hook to claim all rewards for the account exiting
     */
    function _beforeExit(address _account) internal virtual override {
        getRewards(_account);
        super._beforeExit(_account);
    }

    /**
     * @dev Override _beforeRecoverERC20() hook to prevent recovery of a reward token
     */
    function _beforeRecoverERC20(
        address _tokenAddress,
        address _recipient,
        uint256 _amount
    ) internal virtual override {
        require(!rewardTokenAddresses[_tokenAddress], "E16");
        super._beforeRecoverERC20(_tokenAddress, _recipient, _amount);
    }

    /**
     * @dev Override _beforeSetFees() hook to prevent settings fees when rewards are emitting
     */
    function _beforeSetFees() internal virtual override {
        require(block.timestamp > periodFinish, "E17");
        super._beforeSetFees();
    }

    /**
     * @dev Internal hook called before starting the emission process (in the startEmission() function).
     * @param _rewards array of rewards per token.
     * @param _duration emission duration.
     */
    function _beforeStartEmission(
        uint256[] memory _rewards,
        uint256 _duration
    ) internal virtual {}

    /**
     * @dev Internal hook called before stopping the emission process (in the stopEmission() function).
     * @param _refundAddress address to refund the remaining reward to
     */
    function _beforeStopEmission(address _refundAddress) internal virtual {}

    /**
     * @dev Internal hook called before recovering leftover rewards (in the recoverLeftoverRewards() function).
     * @param _tokenAddress address of the token to recover
     * @param _recipient address to recover the leftover rewards to
     */
    function _beforeRecoverLeftoverReward(
        address _tokenAddress,
        address _recipient
    ) internal virtual {}

    /* ========== MODIFIERS ========== */

    /**
     * @dev Modifier to update rewards of a given account.
     * @param _account account to update rewards for
     */
    modifier updateRewards(address _account) {
        for (uint i = 0; i < rewardTokens.length; ++i) {
            address tokenAddress = address(rewardTokens[i]);
            rewardPerTokenStored[tokenAddress] = rewardPerToken(tokenAddress);
            lastUpdateTime = lastTimeRewardApplicable();
            if (_account != address(0)) {
                rewards[tokenAddress][_account] = earned(
                    tokenAddress,
                    _account
                );
                userRewardPerTokenPaid[tokenAddress][
                    _account
                ] = rewardPerTokenStored[tokenAddress];
            }
        }
        _;
    }

    /**
     * @dev Modifier to check if rewards are emitting.
     */
    modifier whenEmitting() {
        require(block.timestamp <= periodFinish, "E18");
        _;
    }

    /**
     * @dev Modifier to check if rewards are not emitting.
     */
    modifier whenNotEmitting() {
        require(block.timestamp > periodFinish, "E17");
        _;
    }
}

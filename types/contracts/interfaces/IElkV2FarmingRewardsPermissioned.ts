/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";

export interface IElkV2FarmingRewardsPermissionedInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addRewardToken"
      | "balances"
      | "collectedFees"
      | "coverage"
      | "coverageAmount"
      | "coverageEarned"
      | "coveragePerToken"
      | "coveragePerTokenStored"
      | "coverageRate"
      | "coverageTokenAddress"
      | "coverageVestingDuration"
      | "depositFee"
      | "depositFeeBps"
      | "earned"
      | "exit"
      | "feesUnit"
      | "getCoverage"
      | "getReward"
      | "getRewards"
      | "lastStakedPosition"
      | "lastTimeRewardApplicable"
      | "lastUpdateTime"
      | "lpToken"
      | "maxFee"
      | "oracle"
      | "periodFinish"
      | "recoverERC20"
      | "recoverFees"
      | "recoverLeftoverCoverage"
      | "recoverLeftoverReward"
      | "rewardPerToken"
      | "rewardPerTokenStored"
      | "rewardRates"
      | "rewardTokenAddresses"
      | "rewardTokenIndex"
      | "rewardTokens"
      | "rewards"
      | "rewardsDuration"
      | "setAddressPermission"
      | "stake"
      | "stakingToken"
      | "startEmission(uint256[],uint256)"
      | "startEmission(uint256[],uint256,uint256)"
      | "stopEmission"
      | "totalSupply"
      | "userCoveragePerTokenPaid"
      | "userLastStakedTime"
      | "userRewardPerTokenPaid"
      | "withdraw"
      | "withdrawalFee"
      | "withdrawalFeeSchedule"
      | "withdrawalFeesBps"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CoveragePaid"
      | "DepositFeesCollected"
      | "FeesRecovered"
      | "FeesSet"
      | "LeftoverCoverageRecovered"
      | "LeftoverRewardRecovered"
      | "Recovered"
      | "RewardPaid"
      | "RewardsEmissionEnded"
      | "RewardsEmissionStarted"
      | "Staked"
      | "WithdrawalFeesCollected"
      | "Withdrawn"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addRewardToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "balances",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "collectedFees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "coverage",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "coverageAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "coverageEarned",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "coveragePerToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "coveragePerTokenStored",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "coverageRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "coverageTokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "coverageVestingDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFeeBps",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "earned",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "exit", values?: undefined): string;
  encodeFunctionData(functionFragment: "feesUnit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getCoverage",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getReward",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewards",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lastStakedPosition",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lastTimeRewardApplicable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdateTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lpToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "maxFee", values?: undefined): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "periodFinish",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recoverERC20",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "recoverFees",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "recoverLeftoverCoverage",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "recoverLeftoverReward",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerTokenStored",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardRates",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardTokenAddresses",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardTokenIndex",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewards",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAddressPermission",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "stakingToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startEmission(uint256[],uint256)",
    values: [BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "startEmission(uint256[],uint256,uint256)",
    values: [BigNumberish[], BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stopEmission",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "userCoveragePerTokenPaid",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "userLastStakedTime",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "userRewardPerTokenPaid",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawalFee",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawalFeeSchedule",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawalFeesBps",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addRewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collectedFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "coverage", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "coverageAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "coverageEarned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "coveragePerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "coveragePerTokenStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "coverageRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "coverageTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "coverageVestingDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "depositFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositFeeBps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feesUnit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCoverage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getRewards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastStakedPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastTimeRewardApplicable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdateTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lpToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "periodFinish",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoverERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoverFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoverLeftoverCoverage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoverLeftoverReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerTokenStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardTokenAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardTokenIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardsDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAddressPermission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startEmission(uint256[],uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startEmission(uint256[],uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stopEmission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userCoveragePerTokenPaid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userLastStakedTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userRewardPerTokenPaid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawalFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawalFeeSchedule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawalFeesBps",
    data: BytesLike
  ): Result;
}

export namespace CoveragePaidEvent {
  export type InputTuple = [account: AddressLike, coverage: BigNumberish];
  export type OutputTuple = [account: string, coverage: bigint];
  export interface OutputObject {
    account: string;
    coverage: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositFeesCollectedEvent {
  export type InputTuple = [_user: AddressLike, _amount: BigNumberish];
  export type OutputTuple = [_user: string, _amount: bigint];
  export interface OutputObject {
    _user: string;
    _amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeesRecoveredEvent {
  export type InputTuple = [_amount: BigNumberish];
  export type OutputTuple = [_amount: bigint];
  export interface OutputObject {
    _amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeesSetEvent {
  export type InputTuple = [
    _depositFeeBps: BigNumberish,
    _withdrawalFeesBps: BigNumberish[],
    _feeSchedule: BigNumberish[]
  ];
  export type OutputTuple = [
    _depositFeeBps: bigint,
    _withdrawalFeesBps: bigint[],
    _feeSchedule: bigint[]
  ];
  export interface OutputObject {
    _depositFeeBps: bigint;
    _withdrawalFeesBps: bigint[];
    _feeSchedule: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LeftoverCoverageRecoveredEvent {
  export type InputTuple = [recipient: AddressLike, amount: BigNumberish];
  export type OutputTuple = [recipient: string, amount: bigint];
  export interface OutputObject {
    recipient: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LeftoverRewardRecoveredEvent {
  export type InputTuple = [_recipient: AddressLike, _amount: BigNumberish];
  export type OutputTuple = [_recipient: string, _amount: bigint];
  export interface OutputObject {
    _recipient: string;
    _amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RecoveredEvent {
  export type InputTuple = [
    token: AddressLike,
    recipient: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [token: string, recipient: string, amount: bigint];
  export interface OutputObject {
    token: string;
    recipient: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardPaidEvent {
  export type InputTuple = [
    _token: AddressLike,
    _account: AddressLike,
    _reward: BigNumberish
  ];
  export type OutputTuple = [_token: string, _account: string, _reward: bigint];
  export interface OutputObject {
    _token: string;
    _account: string;
    _reward: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardsEmissionEndedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardsEmissionStartedEvent {
  export type InputTuple = [_rewards: BigNumberish[], _duration: BigNumberish];
  export type OutputTuple = [_rewards: bigint[], _duration: bigint];
  export interface OutputObject {
    _rewards: bigint[];
    _duration: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StakedEvent {
  export type InputTuple = [account: AddressLike, amount: BigNumberish];
  export type OutputTuple = [account: string, amount: bigint];
  export interface OutputObject {
    account: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawalFeesCollectedEvent {
  export type InputTuple = [_user: AddressLike, _amount: BigNumberish];
  export type OutputTuple = [_user: string, _amount: bigint];
  export interface OutputObject {
    _user: string;
    _amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawnEvent {
  export type InputTuple = [account: AddressLike, amount: BigNumberish];
  export type OutputTuple = [account: string, amount: bigint];
  export interface OutputObject {
    account: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IElkV2FarmingRewardsPermissioned extends BaseContract {
  connect(runner?: ContractRunner | null): IElkV2FarmingRewardsPermissioned;
  waitForDeployment(): Promise<this>;

  interface: IElkV2FarmingRewardsPermissionedInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addRewardToken: TypedContractMethod<
    [_tokenAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  balances: TypedContractMethod<
    [_account: AddressLike],
    [bigint],
    "nonpayable"
  >;

  collectedFees: TypedContractMethod<[], [bigint], "nonpayable">;

  coverage: TypedContractMethod<[_token: AddressLike], [bigint], "nonpayable">;

  coverageAmount: TypedContractMethod<[], [bigint], "nonpayable">;

  coverageEarned: TypedContractMethod<
    [_account: AddressLike],
    [bigint],
    "view"
  >;

  coveragePerToken: TypedContractMethod<[], [bigint], "view">;

  coveragePerTokenStored: TypedContractMethod<[], [bigint], "nonpayable">;

  coverageRate: TypedContractMethod<[], [bigint], "nonpayable">;

  coverageTokenAddress: TypedContractMethod<[], [string], "nonpayable">;

  coverageVestingDuration: TypedContractMethod<[], [bigint], "nonpayable">;

  depositFee: TypedContractMethod<
    [_depositAmount: BigNumberish],
    [bigint],
    "view"
  >;

  depositFeeBps: TypedContractMethod<[], [bigint], "nonpayable">;

  earned: TypedContractMethod<
    [_tokenAddress: AddressLike, _account: AddressLike],
    [bigint],
    "view"
  >;

  exit: TypedContractMethod<[], [void], "nonpayable">;

  feesUnit: TypedContractMethod<[], [bigint], "nonpayable">;

  getCoverage: TypedContractMethod<
    [_recipient: AddressLike],
    [void],
    "nonpayable"
  >;

  getReward: TypedContractMethod<
    [_tokenAddress: AddressLike, _recipient: AddressLike],
    [void],
    "nonpayable"
  >;

  getRewards: TypedContractMethod<
    [_recipient: AddressLike],
    [void],
    "nonpayable"
  >;

  lastStakedPosition: TypedContractMethod<
    [_user: AddressLike],
    [
      [bigint, bigint, bigint] & {
        amount0: bigint;
        amount1: bigint;
        blockTimeStamp: bigint;
      }
    ],
    "nonpayable"
  >;

  lastTimeRewardApplicable: TypedContractMethod<[], [bigint], "view">;

  lastUpdateTime: TypedContractMethod<[], [bigint], "view">;

  lpToken: TypedContractMethod<[], [string], "nonpayable">;

  maxFee: TypedContractMethod<[], [bigint], "nonpayable">;

  oracle: TypedContractMethod<[], [string], "nonpayable">;

  periodFinish: TypedContractMethod<[], [bigint], "view">;

  recoverERC20: TypedContractMethod<
    [
      _tokenAddress: AddressLike,
      _recipient: AddressLike,
      _amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  recoverFees: TypedContractMethod<
    [_recipient: AddressLike],
    [void],
    "nonpayable"
  >;

  recoverLeftoverCoverage: TypedContractMethod<
    [_recipient: AddressLike],
    [void],
    "nonpayable"
  >;

  recoverLeftoverReward: TypedContractMethod<
    [_tokenAddress: AddressLike, _recipient: AddressLike],
    [void],
    "nonpayable"
  >;

  rewardPerToken: TypedContractMethod<
    [_tokenAddress: AddressLike],
    [bigint],
    "view"
  >;

  rewardPerTokenStored: TypedContractMethod<
    [_rewardAddress: AddressLike],
    [bigint],
    "view"
  >;

  rewardRates: TypedContractMethod<
    [_rewardAddress: AddressLike],
    [bigint],
    "view"
  >;

  rewardTokenAddresses: TypedContractMethod<
    [_rewardAddress: AddressLike],
    [boolean],
    "view"
  >;

  rewardTokenIndex: TypedContractMethod<
    [_tokenAddress: AddressLike],
    [bigint],
    "view"
  >;

  rewardTokens: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  rewards: TypedContractMethod<
    [_walletAddress: AddressLike, _tokenAddress: AddressLike],
    [bigint],
    "view"
  >;

  rewardsDuration: TypedContractMethod<[], [bigint], "view">;

  setAddressPermission: TypedContractMethod<
    [_walletAddress: AddressLike, _permission: boolean],
    [void],
    "nonpayable"
  >;

  stake: TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;

  stakingToken: TypedContractMethod<[], [string], "nonpayable">;

  "startEmission(uint256[],uint256)": TypedContractMethod<
    [_rewards: BigNumberish[], _duration: BigNumberish],
    [void],
    "nonpayable"
  >;

  "startEmission(uint256[],uint256,uint256)": TypedContractMethod<
    [
      _rewards: BigNumberish[],
      _coverage: BigNumberish,
      _duration: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  stopEmission: TypedContractMethod<
    [_refundAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  totalSupply: TypedContractMethod<[], [bigint], "nonpayable">;

  userCoveragePerTokenPaid: TypedContractMethod<
    [_tokenPaid: AddressLike],
    [bigint],
    "nonpayable"
  >;

  userLastStakedTime: TypedContractMethod<
    [_user: AddressLike],
    [bigint],
    "view"
  >;

  userRewardPerTokenPaid: TypedContractMethod<
    [_walletAddress: AddressLike, _tokenAddress: AddressLike],
    [bigint],
    "view"
  >;

  withdraw: TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;

  withdrawalFee: TypedContractMethod<
    [_account: AddressLike, _withdrawalAmount: BigNumberish],
    [bigint],
    "view"
  >;

  withdrawalFeeSchedule: TypedContractMethod<
    [arg0: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  withdrawalFeesBps: TypedContractMethod<
    [arg0: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addRewardToken"
  ): TypedContractMethod<[_tokenAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "balances"
  ): TypedContractMethod<[_account: AddressLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "collectedFees"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "coverage"
  ): TypedContractMethod<[_token: AddressLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "coverageAmount"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "coverageEarned"
  ): TypedContractMethod<[_account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "coveragePerToken"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "coveragePerTokenStored"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "coverageRate"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "coverageTokenAddress"
  ): TypedContractMethod<[], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "coverageVestingDuration"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "depositFee"
  ): TypedContractMethod<[_depositAmount: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "depositFeeBps"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "earned"
  ): TypedContractMethod<
    [_tokenAddress: AddressLike, _account: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "exit"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "feesUnit"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "getCoverage"
  ): TypedContractMethod<[_recipient: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getReward"
  ): TypedContractMethod<
    [_tokenAddress: AddressLike, _recipient: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getRewards"
  ): TypedContractMethod<[_recipient: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "lastStakedPosition"
  ): TypedContractMethod<
    [_user: AddressLike],
    [
      [bigint, bigint, bigint] & {
        amount0: bigint;
        amount1: bigint;
        blockTimeStamp: bigint;
      }
    ],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "lastTimeRewardApplicable"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lastUpdateTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lpToken"
  ): TypedContractMethod<[], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "maxFee"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "oracle"
  ): TypedContractMethod<[], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "periodFinish"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "recoverERC20"
  ): TypedContractMethod<
    [
      _tokenAddress: AddressLike,
      _recipient: AddressLike,
      _amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "recoverFees"
  ): TypedContractMethod<[_recipient: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "recoverLeftoverCoverage"
  ): TypedContractMethod<[_recipient: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "recoverLeftoverReward"
  ): TypedContractMethod<
    [_tokenAddress: AddressLike, _recipient: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "rewardPerToken"
  ): TypedContractMethod<[_tokenAddress: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardPerTokenStored"
  ): TypedContractMethod<[_rewardAddress: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardRates"
  ): TypedContractMethod<[_rewardAddress: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardTokenAddresses"
  ): TypedContractMethod<[_rewardAddress: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "rewardTokenIndex"
  ): TypedContractMethod<[_tokenAddress: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardTokens"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "rewards"
  ): TypedContractMethod<
    [_walletAddress: AddressLike, _tokenAddress: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "rewardsDuration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "setAddressPermission"
  ): TypedContractMethod<
    [_walletAddress: AddressLike, _permission: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stake"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stakingToken"
  ): TypedContractMethod<[], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "startEmission(uint256[],uint256)"
  ): TypedContractMethod<
    [_rewards: BigNumberish[], _duration: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "startEmission(uint256[],uint256,uint256)"
  ): TypedContractMethod<
    [
      _rewards: BigNumberish[],
      _coverage: BigNumberish,
      _duration: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stopEmission"
  ): TypedContractMethod<[_refundAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "userCoveragePerTokenPaid"
  ): TypedContractMethod<[_tokenPaid: AddressLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "userLastStakedTime"
  ): TypedContractMethod<[_user: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "userRewardPerTokenPaid"
  ): TypedContractMethod<
    [_walletAddress: AddressLike, _tokenAddress: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawalFee"
  ): TypedContractMethod<
    [_account: AddressLike, _withdrawalAmount: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "withdrawalFeeSchedule"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawalFeesBps"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "nonpayable">;

  getEvent(
    key: "CoveragePaid"
  ): TypedContractEvent<
    CoveragePaidEvent.InputTuple,
    CoveragePaidEvent.OutputTuple,
    CoveragePaidEvent.OutputObject
  >;
  getEvent(
    key: "DepositFeesCollected"
  ): TypedContractEvent<
    DepositFeesCollectedEvent.InputTuple,
    DepositFeesCollectedEvent.OutputTuple,
    DepositFeesCollectedEvent.OutputObject
  >;
  getEvent(
    key: "FeesRecovered"
  ): TypedContractEvent<
    FeesRecoveredEvent.InputTuple,
    FeesRecoveredEvent.OutputTuple,
    FeesRecoveredEvent.OutputObject
  >;
  getEvent(
    key: "FeesSet"
  ): TypedContractEvent<
    FeesSetEvent.InputTuple,
    FeesSetEvent.OutputTuple,
    FeesSetEvent.OutputObject
  >;
  getEvent(
    key: "LeftoverCoverageRecovered"
  ): TypedContractEvent<
    LeftoverCoverageRecoveredEvent.InputTuple,
    LeftoverCoverageRecoveredEvent.OutputTuple,
    LeftoverCoverageRecoveredEvent.OutputObject
  >;
  getEvent(
    key: "LeftoverRewardRecovered"
  ): TypedContractEvent<
    LeftoverRewardRecoveredEvent.InputTuple,
    LeftoverRewardRecoveredEvent.OutputTuple,
    LeftoverRewardRecoveredEvent.OutputObject
  >;
  getEvent(
    key: "Recovered"
  ): TypedContractEvent<
    RecoveredEvent.InputTuple,
    RecoveredEvent.OutputTuple,
    RecoveredEvent.OutputObject
  >;
  getEvent(
    key: "RewardPaid"
  ): TypedContractEvent<
    RewardPaidEvent.InputTuple,
    RewardPaidEvent.OutputTuple,
    RewardPaidEvent.OutputObject
  >;
  getEvent(
    key: "RewardsEmissionEnded"
  ): TypedContractEvent<
    RewardsEmissionEndedEvent.InputTuple,
    RewardsEmissionEndedEvent.OutputTuple,
    RewardsEmissionEndedEvent.OutputObject
  >;
  getEvent(
    key: "RewardsEmissionStarted"
  ): TypedContractEvent<
    RewardsEmissionStartedEvent.InputTuple,
    RewardsEmissionStartedEvent.OutputTuple,
    RewardsEmissionStartedEvent.OutputObject
  >;
  getEvent(
    key: "Staked"
  ): TypedContractEvent<
    StakedEvent.InputTuple,
    StakedEvent.OutputTuple,
    StakedEvent.OutputObject
  >;
  getEvent(
    key: "WithdrawalFeesCollected"
  ): TypedContractEvent<
    WithdrawalFeesCollectedEvent.InputTuple,
    WithdrawalFeesCollectedEvent.OutputTuple,
    WithdrawalFeesCollectedEvent.OutputObject
  >;
  getEvent(
    key: "Withdrawn"
  ): TypedContractEvent<
    WithdrawnEvent.InputTuple,
    WithdrawnEvent.OutputTuple,
    WithdrawnEvent.OutputObject
  >;

  filters: {
    "CoveragePaid(address,uint256)": TypedContractEvent<
      CoveragePaidEvent.InputTuple,
      CoveragePaidEvent.OutputTuple,
      CoveragePaidEvent.OutputObject
    >;
    CoveragePaid: TypedContractEvent<
      CoveragePaidEvent.InputTuple,
      CoveragePaidEvent.OutputTuple,
      CoveragePaidEvent.OutputObject
    >;

    "DepositFeesCollected(address,uint256)": TypedContractEvent<
      DepositFeesCollectedEvent.InputTuple,
      DepositFeesCollectedEvent.OutputTuple,
      DepositFeesCollectedEvent.OutputObject
    >;
    DepositFeesCollected: TypedContractEvent<
      DepositFeesCollectedEvent.InputTuple,
      DepositFeesCollectedEvent.OutputTuple,
      DepositFeesCollectedEvent.OutputObject
    >;

    "FeesRecovered(uint256)": TypedContractEvent<
      FeesRecoveredEvent.InputTuple,
      FeesRecoveredEvent.OutputTuple,
      FeesRecoveredEvent.OutputObject
    >;
    FeesRecovered: TypedContractEvent<
      FeesRecoveredEvent.InputTuple,
      FeesRecoveredEvent.OutputTuple,
      FeesRecoveredEvent.OutputObject
    >;

    "FeesSet(uint16,uint16[],uint32[])": TypedContractEvent<
      FeesSetEvent.InputTuple,
      FeesSetEvent.OutputTuple,
      FeesSetEvent.OutputObject
    >;
    FeesSet: TypedContractEvent<
      FeesSetEvent.InputTuple,
      FeesSetEvent.OutputTuple,
      FeesSetEvent.OutputObject
    >;

    "LeftoverCoverageRecovered(address,uint256)": TypedContractEvent<
      LeftoverCoverageRecoveredEvent.InputTuple,
      LeftoverCoverageRecoveredEvent.OutputTuple,
      LeftoverCoverageRecoveredEvent.OutputObject
    >;
    LeftoverCoverageRecovered: TypedContractEvent<
      LeftoverCoverageRecoveredEvent.InputTuple,
      LeftoverCoverageRecoveredEvent.OutputTuple,
      LeftoverCoverageRecoveredEvent.OutputObject
    >;

    "LeftoverRewardRecovered(address,uint256)": TypedContractEvent<
      LeftoverRewardRecoveredEvent.InputTuple,
      LeftoverRewardRecoveredEvent.OutputTuple,
      LeftoverRewardRecoveredEvent.OutputObject
    >;
    LeftoverRewardRecovered: TypedContractEvent<
      LeftoverRewardRecoveredEvent.InputTuple,
      LeftoverRewardRecoveredEvent.OutputTuple,
      LeftoverRewardRecoveredEvent.OutputObject
    >;

    "Recovered(address,address,uint256)": TypedContractEvent<
      RecoveredEvent.InputTuple,
      RecoveredEvent.OutputTuple,
      RecoveredEvent.OutputObject
    >;
    Recovered: TypedContractEvent<
      RecoveredEvent.InputTuple,
      RecoveredEvent.OutputTuple,
      RecoveredEvent.OutputObject
    >;

    "RewardPaid(address,address,uint256)": TypedContractEvent<
      RewardPaidEvent.InputTuple,
      RewardPaidEvent.OutputTuple,
      RewardPaidEvent.OutputObject
    >;
    RewardPaid: TypedContractEvent<
      RewardPaidEvent.InputTuple,
      RewardPaidEvent.OutputTuple,
      RewardPaidEvent.OutputObject
    >;

    "RewardsEmissionEnded()": TypedContractEvent<
      RewardsEmissionEndedEvent.InputTuple,
      RewardsEmissionEndedEvent.OutputTuple,
      RewardsEmissionEndedEvent.OutputObject
    >;
    RewardsEmissionEnded: TypedContractEvent<
      RewardsEmissionEndedEvent.InputTuple,
      RewardsEmissionEndedEvent.OutputTuple,
      RewardsEmissionEndedEvent.OutputObject
    >;

    "RewardsEmissionStarted(uint256[],uint256)": TypedContractEvent<
      RewardsEmissionStartedEvent.InputTuple,
      RewardsEmissionStartedEvent.OutputTuple,
      RewardsEmissionStartedEvent.OutputObject
    >;
    RewardsEmissionStarted: TypedContractEvent<
      RewardsEmissionStartedEvent.InputTuple,
      RewardsEmissionStartedEvent.OutputTuple,
      RewardsEmissionStartedEvent.OutputObject
    >;

    "Staked(address,uint256)": TypedContractEvent<
      StakedEvent.InputTuple,
      StakedEvent.OutputTuple,
      StakedEvent.OutputObject
    >;
    Staked: TypedContractEvent<
      StakedEvent.InputTuple,
      StakedEvent.OutputTuple,
      StakedEvent.OutputObject
    >;

    "WithdrawalFeesCollected(address,uint256)": TypedContractEvent<
      WithdrawalFeesCollectedEvent.InputTuple,
      WithdrawalFeesCollectedEvent.OutputTuple,
      WithdrawalFeesCollectedEvent.OutputObject
    >;
    WithdrawalFeesCollected: TypedContractEvent<
      WithdrawalFeesCollectedEvent.InputTuple,
      WithdrawalFeesCollectedEvent.OutputTuple,
      WithdrawalFeesCollectedEvent.OutputObject
    >;

    "Withdrawn(address,uint256)": TypedContractEvent<
      WithdrawnEvent.InputTuple,
      WithdrawnEvent.OutputTuple,
      WithdrawnEvent.OutputObject
    >;
    Withdrawn: TypedContractEvent<
      WithdrawnEvent.InputTuple,
      WithdrawnEvent.OutputTuple,
      WithdrawnEvent.OutputObject
    >;
  };
}
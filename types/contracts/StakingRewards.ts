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
} from "../common";
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

export interface StakingRewardsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addRewardToken"
      | "balances"
      | "collectedFees"
      | "depositFee"
      | "depositFeeBps"
      | "earned"
      | "exit"
      | "feesUnit"
      | "getReward"
      | "getRewards"
      | "lastTimeRewardApplicable"
      | "lastUpdateTime"
      | "maxFee"
      | "owner"
      | "periodFinish"
      | "recoverERC20"
      | "recoverFees"
      | "recoverLeftoverReward"
      | "renounceOwnership"
      | "rewardPerToken"
      | "rewardPerTokenStored"
      | "rewardRates"
      | "rewardTokenAddresses"
      | "rewardTokenIndex"
      | "rewardTokens"
      | "rewards"
      | "rewardsDuration"
      | "stake"
      | "stakingToken"
      | "startEmission"
      | "stopEmission"
      | "totalSupply"
      | "transferOwnership"
      | "userLastStakedTime"
      | "userRewardPerTokenPaid"
      | "withdraw"
      | "withdrawalFee"
      | "withdrawalFeeSchedule"
      | "withdrawalFeesBps"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DepositFeesCollected"
      | "FeesRecovered"
      | "FeesSet"
      | "LeftoverRewardRecovered"
      | "OwnershipTransferred"
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
    functionFragment: "getReward",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewards",
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
  encodeFunctionData(functionFragment: "maxFee", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
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
    functionFragment: "recoverLeftoverReward",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
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
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "stakingToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startEmission",
    values: [BigNumberish[], BigNumberish]
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
    functionFragment: "transferOwnership",
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
  decodeFunctionResult(functionFragment: "depositFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositFeeBps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feesUnit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getRewards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastTimeRewardApplicable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdateTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
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
    functionFragment: "recoverLeftoverReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
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
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startEmission",
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
    functionFragment: "transferOwnership",
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

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
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

export interface StakingRewards extends BaseContract {
  connect(runner?: ContractRunner | null): StakingRewards;
  waitForDeployment(): Promise<this>;

  interface: StakingRewardsInterface;

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

  balances: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  collectedFees: TypedContractMethod<[], [bigint], "view">;

  depositFee: TypedContractMethod<
    [_depositAmount: BigNumberish],
    [bigint],
    "view"
  >;

  depositFeeBps: TypedContractMethod<[], [bigint], "view">;

  earned: TypedContractMethod<
    [_tokenAddress: AddressLike, _account: AddressLike],
    [bigint],
    "view"
  >;

  exit: TypedContractMethod<[], [void], "nonpayable">;

  feesUnit: TypedContractMethod<[], [bigint], "view">;

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

  lastTimeRewardApplicable: TypedContractMethod<[], [bigint], "view">;

  lastUpdateTime: TypedContractMethod<[], [bigint], "view">;

  maxFee: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

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

  recoverLeftoverReward: TypedContractMethod<
    [_tokenAddress: AddressLike, _recipient: AddressLike],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  rewardPerToken: TypedContractMethod<
    [_tokenAddress: AddressLike],
    [bigint],
    "view"
  >;

  rewardPerTokenStored: TypedContractMethod<
    [token: AddressLike],
    [bigint],
    "view"
  >;

  rewardRates: TypedContractMethod<[token: AddressLike], [bigint], "view">;

  rewardTokenAddresses: TypedContractMethod<
    [tokenAddress: AddressLike],
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
    [token: AddressLike, walletAddress: AddressLike],
    [bigint],
    "view"
  >;

  rewardsDuration: TypedContractMethod<[], [bigint], "view">;

  stake: TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;

  stakingToken: TypedContractMethod<[], [string], "view">;

  startEmission: TypedContractMethod<
    [_rewards: BigNumberish[], _duration: BigNumberish],
    [void],
    "nonpayable"
  >;

  stopEmission: TypedContractMethod<
    [_refundAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  userLastStakedTime: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  userRewardPerTokenPaid: TypedContractMethod<
    [token: AddressLike, walletAddress: AddressLike],
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
    "view"
  >;

  withdrawalFeesBps: TypedContractMethod<
    [arg0: BigNumberish],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addRewardToken"
  ): TypedContractMethod<[_tokenAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "balances"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "collectedFees"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "depositFee"
  ): TypedContractMethod<[_depositAmount: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "depositFeeBps"
  ): TypedContractMethod<[], [bigint], "view">;
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
  ): TypedContractMethod<[], [bigint], "view">;
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
    nameOrSignature: "lastTimeRewardApplicable"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lastUpdateTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
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
    nameOrSignature: "recoverLeftoverReward"
  ): TypedContractMethod<
    [_tokenAddress: AddressLike, _recipient: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "rewardPerToken"
  ): TypedContractMethod<[_tokenAddress: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardPerTokenStored"
  ): TypedContractMethod<[token: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardRates"
  ): TypedContractMethod<[token: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardTokenAddresses"
  ): TypedContractMethod<[tokenAddress: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "rewardTokenIndex"
  ): TypedContractMethod<[_tokenAddress: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardTokens"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "rewards"
  ): TypedContractMethod<
    [token: AddressLike, walletAddress: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "rewardsDuration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "stake"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stakingToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "startEmission"
  ): TypedContractMethod<
    [_rewards: BigNumberish[], _duration: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stopEmission"
  ): TypedContractMethod<[_refundAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "userLastStakedTime"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "userRewardPerTokenPaid"
  ): TypedContractMethod<
    [token: AddressLike, walletAddress: AddressLike],
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
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "withdrawalFeesBps"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

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
    key: "LeftoverRewardRecovered"
  ): TypedContractEvent<
    LeftoverRewardRecoveredEvent.InputTuple,
    LeftoverRewardRecoveredEvent.OutputTuple,
    LeftoverRewardRecoveredEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
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

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
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

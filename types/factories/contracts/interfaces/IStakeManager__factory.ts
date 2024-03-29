/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IStakeManager,
  IStakeManagerInterface,
} from "../../../contracts/interfaces/IStakeManager";
import { Contract, Interface, type ContractRunner } from "ethers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_factoryAddress",
        type: "address",
      },
    ],
    name: "FarmFactorySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_farm",
        type: "address",
      },
    ],
    name: "RewardsReceived",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_stakeAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "addRewardToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_farms",
        type: "address[]",
      },
    ],
    name: "multiClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_stakeAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "recoverERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_stakeAddress",
        type: "address",
      },
    ],
    name: "recoverFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_stakeAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "recoverLeftoverReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_factoryAddress",
        type: "address",
      },
    ],
    name: "setFarmFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_stakeAddress",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_rewards",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
    ],
    name: "startEmission",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_stakeAddress",
        type: "address",
      },
    ],
    name: "stopEmission",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IStakeManager__factory {
  static readonly abi = _abi;
  static createInterface(): IStakeManagerInterface {
    return new Interface(_abi) as IStakeManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IStakeManager {
    return new Contract(address, _abi, runner) as unknown as IStakeManager;
  }
}

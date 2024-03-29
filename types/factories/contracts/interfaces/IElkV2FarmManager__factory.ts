/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IElkV2FarmManager,
  IElkV2FarmManagerInterface,
} from "../../../contracts/interfaces/IElkV2FarmManager";
import { Contract, Interface, type ContractRunner } from "ethers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "factoryAddress",
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
        name: "farm",
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
        name: "_farmAddress",
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
        name: "_farmAddress",
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
        name: "_farmAddress",
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
        name: "_farmAddress",
        type: "address",
      },
    ],
    name: "recoverLeftoverCoverage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_farmAddress",
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
        name: "_farmAddress",
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
        name: "_farmAddress",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_rewards",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_coverage",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
    ],
    name: "startEmissionWithCoverage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_farmAddress",
        type: "address",
      },
    ],
    name: "stopEmission",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IElkV2FarmManager__factory {
  static readonly abi = _abi;
  static createInterface(): IElkV2FarmManagerInterface {
    return new Interface(_abi) as IElkV2FarmManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IElkV2FarmManager {
    return new Contract(address, _abi, runner) as unknown as IElkV2FarmManager;
  }
}

/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IElkV2FarmFactory,
  IElkV2FarmFactoryInterface,
} from "../../../contracts/interfaces/IElkV2FarmFactory";
import { Contract, Interface, type ContractRunner } from "ethers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_newContract",
        type: "address",
      },
    ],
    name: "ContractCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_newFee",
        type: "uint256",
      },
    ],
    name: "FeeSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_balanceRecovered",
        type: "uint256",
      },
    ],
    name: "FeesRecovered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_farmManager",
        type: "address",
      },
    ],
    name: "ManagerSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "allFarms",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "allFarmsLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_oracleAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lpTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_coverageTokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_coverageAmount",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_coverageVestingDuration",
        type: "uint32",
      },
      {
        internalType: "address[]",
        name: "_rewardTokenAddresses",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_rewardsDuration",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_depositFeeBps",
        type: "uint16",
      },
      {
        internalType: "uint16[]",
        name: "_withdrawalFeesBps",
        type: "uint16[]",
      },
      {
        internalType: "uint32[]",
        name: "_withdrawalFeeSchedule",
        type: "uint32[]",
      },
    ],
    name: "createNewPermissonedRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_oracleAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lpTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_coverageTokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_coverageAmount",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_coverageVestingDuration",
        type: "uint32",
      },
      {
        internalType: "address[]",
        name: "_rewardTokenAddresses",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_rewardsDuration",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_depositFeeBps",
        type: "uint16",
      },
      {
        internalType: "uint16[]",
        name: "_withdrawalFeesBps",
        type: "uint16[]",
      },
      {
        internalType: "uint32[]",
        name: "_withdrawalFeeSchedule",
        type: "uint32[]",
      },
    ],
    name: "createNewRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "farmManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    name: "getCreator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_creator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lpTokenAddress",
        type: "address",
      },
    ],
    name: "getFarm",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_creator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lpTokenAddress",
        type: "address",
      },
    ],
    name: "getPermissionedFarm",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    name: "isFarm",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    name: "isPermissionedFarm",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    name: "overrideOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newFee",
        type: "uint256",
      },
    ],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_managerAddress",
        type: "address",
      },
    ],
    name: "setManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IElkV2FarmFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IElkV2FarmFactoryInterface {
    return new Interface(_abi) as IElkV2FarmFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IElkV2FarmFactory {
    return new Contract(address, _abi, runner) as unknown as IElkV2FarmFactory;
  }
}
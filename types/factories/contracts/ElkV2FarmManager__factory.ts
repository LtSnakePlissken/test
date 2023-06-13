/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { NonPayableOverrides } from "../../common";
import type {
  ElkV2FarmManager,
  ElkV2FarmManagerInterface,
} from "../../contracts/ElkV2FarmManager";
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factoryAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minDelayBeforeStop",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
    inputs: [],
    name: "farmFactory",
    outputs: [
      {
        internalType: "contract IElkV2FarmFactory",
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
        name: "",
        type: "address",
      },
    ],
    name: "lastStarted",
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
    name: "minDelayBeforeStop",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_walletAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_permission",
        type: "bool",
      },
      {
        internalType: "address",
        name: "_permissionedFarmAddress",
        type: "address",
      },
    ],
    name: "setAddressPermission",
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
        internalType: "uint256",
        name: "_delay",
        type: "uint256",
      },
    ],
    name: "setMinDelayBeforeStop",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200307038038062003070833981016040819052620000349162000114565b6200003f33620000c4565b6001600160a01b0382166200009a5760405162461bcd60e51b815260206004820152601e60248201527f456c6b56324661726d4d616e616765723a205a45524f5f414444524553530000604482015260640160405180910390fd5b600180546001600160a01b0319166001600160a01b03939093169290921790915560035562000150565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156200012857600080fd5b82516001600160a01b03811681146200014057600080fd5b6020939093015192949293505050565b612f1080620001606000396000f3fe608060405234801561001057600080fd5b50600436106100e65760003560e01c80631171bda9146100eb57806323cb2390146101005780633acd0be3146101135780636d25e175146101265780636da9c58e1461014f5780636e041d0014610162578063715018a6146101755780637b7594571461017d57806387e7ed3a146101ab5780638da5cb5b146101be578063908e8ed8146101c657806399b4c231146101cf578063c56e67ea146101e2578063c74cd014146101f5578063f2d1763914610208578063f2fde38b1461021b578063f9ea07781461022e578063fe32a4bd14610241575b600080fd5b6100fe6100f9366004612966565b610254565b005b6100fe61010e3660046129a7565b6105e8565b6100fe610121366004612ab4565b61096e565b600154610139906001600160a01b031681565b6040516101469190612b0c565b60405180910390f35b6100fe61015d366004612b20565b610dd0565b6100fe610170366004612b20565b6111d4565b6100fe611288565b61019d61018b366004612b20565b60026020526000908152604090205481565b604051908152602001610146565b6100fe6101b9366004612b20565b61129c565b6101396115e9565b61019d60035481565b6100fe6101dd366004612b44565b6115f8565b6100fe6101f0366004612bb1565b611a21565b6100fe610203366004612bfc565b611d78565b6100fe6102163660046129a7565b611eb8565b6100fe610229366004612b20565b612207565b6100fe61023c366004612b20565b612280565b6100fe61024f366004612c8a565b6125cd565b60015460405163637012c760e01b815284916001600160a01b03169063637012c790610284908490600401612b0c565b602060405180830381865afa1580156102a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c59190612ca3565b8061033c575060015460405163ba7174df60e01b81526001600160a01b039091169063ba7174df906102fb908490600401612b0c565b602060405180830381865afa158015610318573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033c9190612ca3565b6103615760405162461bcd60e51b815260040161035890612cc0565b60405180910390fd5b60008190506000816001600160a01b03166372f702f36040518163ffffffff1660e01b81526004016020604051808303816000875af11580156103a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103cc9190612cf7565b60015460405163637012c760e01b81529192506001600160a01b03169063637012c7906103fd908690600401612b0c565b602060405180830381865afa15801561041a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043e9190612ca3565b156104e35760015460405163a1d953f760e01b81526001600160a01b0380861692169063a1d953f7906104779033908690600401612d14565b602060405180830381865afa158015610494573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b89190612cf7565b6001600160a01b0316146104de5760405162461bcd60e51b815260040161035890612d2e565b61057e565b60015460405163372d14b560e11b81526001600160a01b03808616921690636e5a296a906105179033908690600401612d14565b602060405180830381865afa158015610534573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105589190612cf7565b6001600160a01b03161461057e5760405162461bcd60e51b815260040161035890612d2e565b604051631171bda960e01b81526001600160a01b03871690631171bda9906105ae90889033908990600401612d63565b600060405180830381600087803b1580156105c857600080fd5b505af11580156105dc573d6000803e3d6000fd5b50505050505050505050565b60015460405163637012c760e01b815283916001600160a01b03169063637012c790610618908490600401612b0c565b602060405180830381865afa158015610635573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106599190612ca3565b806106d0575060015460405163ba7174df60e01b81526001600160a01b039091169063ba7174df9061068f908490600401612b0c565b602060405180830381865afa1580156106ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d09190612ca3565b6106ec5760405162461bcd60e51b815260040161035890612cc0565b60008190506000816001600160a01b03166372f702f36040518163ffffffff1660e01b81526004016020604051808303816000875af1158015610733573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107579190612cf7565b60015460405163637012c760e01b81529192506001600160a01b03169063637012c790610788908690600401612b0c565b602060405180830381865afa1580156107a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c99190612ca3565b1561086e5760015460405163a1d953f760e01b81526001600160a01b0380861692169063a1d953f7906108029033908690600401612d14565b602060405180830381865afa15801561081f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108439190612cf7565b6001600160a01b0316146108695760405162461bcd60e51b815260040161035890612d2e565b610909565b60015460405163372d14b560e11b81526001600160a01b03808616921690636e5a296a906108a29033908690600401612d14565b602060405180830381865afa1580156108bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e39190612cf7565b6001600160a01b0316146109095760405162461bcd60e51b815260040161035890612d2e565b604051630700f9b360e21b81526001600160a01b03861690631c03e6cc90610935908790600401612b0c565b600060405180830381600087803b15801561094f57600080fd5b505af1158015610963573d6000803e3d6000fd5b505050505050505050565b60015460405163637012c760e01b815284916001600160a01b03169063637012c79061099e908490600401612b0c565b602060405180830381865afa1580156109bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109df9190612ca3565b80610a56575060015460405163ba7174df60e01b81526001600160a01b039091169063ba7174df90610a15908490600401612b0c565b602060405180830381865afa158015610a32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a569190612ca3565b610a725760405162461bcd60e51b815260040161035890612cc0565b60008190506000816001600160a01b03166372f702f36040518163ffffffff1660e01b81526004016020604051808303816000875af1158015610ab9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610add9190612cf7565b60015460405163637012c760e01b81529192506001600160a01b03169063637012c790610b0e908690600401612b0c565b602060405180830381865afa158015610b2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4f9190612ca3565b15610bf45760015460405163a1d953f760e01b81526001600160a01b0380861692169063a1d953f790610b889033908690600401612d14565b602060405180830381865afa158015610ba5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc99190612cf7565b6001600160a01b031614610bef5760405162461bcd60e51b815260040161035890612d2e565b610c8f565b60015460405163372d14b560e11b81526001600160a01b03808616921690636e5a296a90610c289033908690600401612d14565b602060405180830381865afa158015610c45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c699190612cf7565b6001600160a01b031614610c8f5760405162461bcd60e51b815260040161035890612d2e565b8560005b8651811015610d4b57610d3b3389898481518110610cb357610cb3612d87565b6020026020010151856001600160a01b0316637bb7bed1866040518263ffffffff1660e01b8152600401610ce991815260200190565b602060405180830381865afa158015610d06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2a9190612cf7565b6001600160a01b03169291906125da565b610d4481612db3565b9050610c93565b5060405163174f830160e11b81526001600160a01b03821690632e9f060290610d7a9089908990600401612e07565b600060405180830381600087803b158015610d9457600080fd5b505af1158015610da8573d6000803e3d6000fd5b5050506001600160a01b03909716600090815260026020526040902042905550505050505050565b60015460405163637012c760e01b815282916001600160a01b03169063637012c790610e00908490600401612b0c565b602060405180830381865afa158015610e1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e419190612ca3565b80610eb8575060015460405163ba7174df60e01b81526001600160a01b039091169063ba7174df90610e77908490600401612b0c565b602060405180830381865afa158015610e94573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb89190612ca3565b610ed45760405162461bcd60e51b815260040161035890612cc0565b60008190506000816001600160a01b03166372f702f36040518163ffffffff1660e01b81526004016020604051808303816000875af1158015610f1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f3f9190612cf7565b60015460405163637012c760e01b81529192506001600160a01b03169063637012c790610f70908690600401612b0c565b602060405180830381865afa158015610f8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fb19190612ca3565b156110565760015460405163a1d953f760e01b81526001600160a01b0380861692169063a1d953f790610fea9033908690600401612d14565b602060405180830381865afa158015611007573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061102b9190612cf7565b6001600160a01b0316146110515760405162461bcd60e51b815260040161035890612d2e565b6110f1565b60015460405163372d14b560e11b81526001600160a01b03808616921690636e5a296a9061108a9033908690600401612d14565b602060405180830381865afa1580156110a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110cb9190612cf7565b6001600160a01b0316146110f15760405162461bcd60e51b815260040161035890612d2e565b6003546001600160a01b038516600090815260026020526040902054429161111891612e29565b11156111705760405162461bcd60e51b815260206004820152602160248201527f456c6b56324661726d4d616e616765723a20544f4f5f53484f52545f44454c416044820152605960f81b6064820152608401610358565b6040516336d4e2c760e11b81526001600160a01b03851690636da9c58e9061119c903390600401612b0c565b600060405180830381600087803b1580156111b657600080fd5b505af11580156111ca573d6000803e3d6000fd5b5050505050505050565b6111dc612638565b6001600160a01b0381166112325760405162461bcd60e51b815260206004820152601e60248201527f456c6b56324661726d4d616e616765723a205a45524f5f4144445245535300006044820152606401610358565b600180546001600160a01b0319166001600160a01b0383161790556040517f081d08ac089fbd8e494de9c8ecf6c4be22ad1b100ae31a788d48bec39334a0709061127d908390612b0c565b60405180910390a150565b611290612638565b61129a6000612697565b565b60015460405163637012c760e01b815282916001600160a01b03169063637012c7906112cc908490600401612b0c565b602060405180830381865afa1580156112e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061130d9190612ca3565b80611384575060015460405163ba7174df60e01b81526001600160a01b039091169063ba7174df90611343908490600401612b0c565b602060405180830381865afa158015611360573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113849190612ca3565b6113a05760405162461bcd60e51b815260040161035890612cc0565b60008190506000816001600160a01b03166372f702f36040518163ffffffff1660e01b81526004016020604051808303816000875af11580156113e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061140b9190612cf7565b60015460405163637012c760e01b81529192506001600160a01b03169063637012c79061143c908690600401612b0c565b602060405180830381865afa158015611459573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061147d9190612ca3565b156115225760015460405163a1d953f760e01b81526001600160a01b0380861692169063a1d953f7906114b69033908690600401612d14565b602060405180830381865afa1580156114d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114f79190612cf7565b6001600160a01b03161461151d5760405162461bcd60e51b815260040161035890612d2e565b6115bd565b60015460405163372d14b560e11b81526001600160a01b03808616921690636e5a296a906115569033908690600401612d14565b602060405180830381865afa158015611573573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115979190612cf7565b6001600160a01b0316146115bd5760405162461bcd60e51b815260040161035890612d2e565b6040516343f3f69d60e11b81526001600160a01b038516906387e7ed3a9061119c903390600401612b0c565b6000546001600160a01b031690565b60015460405163637012c760e01b815285916001600160a01b03169063637012c790611628908490600401612b0c565b602060405180830381865afa158015611645573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116699190612ca3565b806116e0575060015460405163ba7174df60e01b81526001600160a01b039091169063ba7174df9061169f908490600401612b0c565b602060405180830381865afa1580156116bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e09190612ca3565b6116fc5760405162461bcd60e51b815260040161035890612cc0565b60008190506000816001600160a01b03166372f702f36040518163ffffffff1660e01b81526004016020604051808303816000875af1158015611743573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117679190612cf7565b60015460405163637012c760e01b81529192506001600160a01b03169063637012c790611798908690600401612b0c565b602060405180830381865afa1580156117b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117d99190612ca3565b1561187e5760015460405163a1d953f760e01b81526001600160a01b0380861692169063a1d953f7906118129033908690600401612d14565b602060405180830381865afa15801561182f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118539190612cf7565b6001600160a01b0316146118795760405162461bcd60e51b815260040161035890612d2e565b611919565b60015460405163372d14b560e11b81526001600160a01b03808616921690636e5a296a906118b29033908690600401612d14565b602060405180830381865afa1580156118cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118f39190612cf7565b6001600160a01b0316146119195760405162461bcd60e51b815260040161035890612d2e565b8660005b875181101561194d5761193d338a8a8481518110610cb357610cb3612d87565b61194681612db3565b905061191d565b50851561199a5761199a338988846001600160a01b031663e13d87226040518163ffffffff1660e01b81526004016020604051808303816000875af1158015610d06573d6000803e3d6000fd5b60405163569de2a360e11b81526001600160a01b0389169063ad3bc546906119ca908a908a908a90600401612e42565b600060405180830381600087803b1580156119e457600080fd5b505af11580156119f8573d6000803e3d6000fd5b5050506001600160a01b0390981660009081526002602052604090204290555050505050505050565b60015460405163637012c760e01b815282916001600160a01b03169063637012c790611a51908490600401612b0c565b602060405180830381865afa158015611a6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a929190612ca3565b80611b09575060015460405163ba7174df60e01b81526001600160a01b039091169063ba7174df90611ac8908490600401612b0c565b602060405180830381865afa158015611ae5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b099190612ca3565b611b255760405162461bcd60e51b815260040161035890612cc0565b60008190506000816001600160a01b03166372f702f36040518163ffffffff1660e01b81526004016020604051808303816000875af1158015611b6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b909190612cf7565b60015460405163637012c760e01b81529192506001600160a01b03169063637012c790611bc1908690600401612b0c565b602060405180830381865afa158015611bde573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c029190612ca3565b15611ca75760015460405163a1d953f760e01b81526001600160a01b0380861692169063a1d953f790611c3b9033908690600401612d14565b602060405180830381865afa158015611c58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c7c9190612cf7565b6001600160a01b031614611ca25760405162461bcd60e51b815260040161035890612d2e565b611d42565b60015460405163372d14b560e11b81526001600160a01b03808616921690636e5a296a90611cdb9033908690600401612d14565b602060405180830381865afa158015611cf8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d1c9190612cf7565b6001600160a01b031614611d425760405162461bcd60e51b815260040161035890612d2e565b604051631f3ba4cb60e21b81526001600160a01b0387811660048301528615156024830152851690637cee932c906044016105ae565b601e815110611dc95760405162461bcd60e51b815260206004820181905260248201527f456c6b56324661726d4d616e616765723a20544f4f5f4d414e595f4641524d536044820152606401610358565b60005b8151811015611eb4576000828281518110611de957611de9612d87565b60200260200101519050806001600160a01b03166379ee54f7336040518263ffffffff1660e01b8152600401611e1f9190612b0c565b600060405180830381600087803b158015611e3957600080fd5b505af1158015611e4d573d6000803e3d6000fd5b505050507fab3d721de7558ed8926b5577897ff28185aad98b1dfaffc0ec27d021dbb235e5838381518110611e8457611e84612d87565b6020026020010151604051611e999190612b0c565b60405180910390a15080611eac81612db3565b915050611dcc565b5050565b60015460405163637012c760e01b815283916001600160a01b03169063637012c790611ee8908490600401612b0c565b602060405180830381865afa158015611f05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f299190612ca3565b80611fa0575060015460405163ba7174df60e01b81526001600160a01b039091169063ba7174df90611f5f908490600401612b0c565b602060405180830381865afa158015611f7c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fa09190612ca3565b611fbc5760405162461bcd60e51b815260040161035890612cc0565b60008190506000816001600160a01b03166372f702f36040518163ffffffff1660e01b81526004016020604051808303816000875af1158015612003573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120279190612cf7565b60015460405163637012c760e01b81529192506001600160a01b03169063637012c790612058908690600401612b0c565b602060405180830381865afa158015612075573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120999190612ca3565b1561213e5760015460405163a1d953f760e01b81526001600160a01b0380861692169063a1d953f7906120d29033908690600401612d14565b602060405180830381865afa1580156120ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121139190612cf7565b6001600160a01b0316146121395760405162461bcd60e51b815260040161035890612d2e565b6121d9565b60015460405163372d14b560e11b81526001600160a01b03808616921690636e5a296a906121729033908690600401612d14565b602060405180830381865afa15801561218f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121b39190612cf7565b6001600160a01b0316146121d95760405162461bcd60e51b815260040161035890612d2e565b60405163f2d1763960e01b81526001600160a01b0386169063f2d17639906109359087903390600401612d14565b61220f612638565b6001600160a01b0381166122745760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610358565b61227d81612697565b50565b60015460405163637012c760e01b815282916001600160a01b03169063637012c7906122b0908490600401612b0c565b602060405180830381865afa1580156122cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122f19190612ca3565b80612368575060015460405163ba7174df60e01b81526001600160a01b039091169063ba7174df90612327908490600401612b0c565b602060405180830381865afa158015612344573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123689190612ca3565b6123845760405162461bcd60e51b815260040161035890612cc0565b60008190506000816001600160a01b03166372f702f36040518163ffffffff1660e01b81526004016020604051808303816000875af11580156123cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123ef9190612cf7565b60015460405163637012c760e01b81529192506001600160a01b03169063637012c790612420908690600401612b0c565b602060405180830381865afa15801561243d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124619190612ca3565b156125065760015460405163a1d953f760e01b81526001600160a01b0380861692169063a1d953f79061249a9033908690600401612d14565b602060405180830381865afa1580156124b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124db9190612cf7565b6001600160a01b0316146125015760405162461bcd60e51b815260040161035890612d2e565b6125a1565b60015460405163372d14b560e11b81526001600160a01b03808616921690636e5a296a9061253a9033908690600401612d14565b602060405180830381865afa158015612557573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061257b9190612cf7565b6001600160a01b0316146125a15760405162461bcd60e51b815260040161035890612d2e565b604051631f3d40ef60e31b81526001600160a01b0385169063f9ea07789061119c903390600401612b0c565b6125d5612638565b600355565b612632846323b872dd60e01b8585856040516024016125fb93929190612d63565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526126e7565b50505050565b336126416115e9565b6001600160a01b03161461129a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610358565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600061273c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166127c19092919063ffffffff16565b905080516000148061275d57508080602001905181019061275d9190612ca3565b6127bc5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610358565b505050565b60606127d084846000856127d8565b949350505050565b6060824710156128395760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610358565b600080866001600160a01b031685876040516128559190612e8b565b60006040518083038185875af1925050503d8060008114612892576040519150601f19603f3d011682016040523d82523d6000602084013e612897565b606091505b50915091506128a8878383876128b3565b979650505050505050565b6060831561292257825160000361291b576001600160a01b0385163b61291b5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610358565b50816127d0565b6127d083838151156129375781518083602001fd5b8060405162461bcd60e51b81526004016103589190612ea7565b6001600160a01b038116811461227d57600080fd5b60008060006060848603121561297b57600080fd5b833561298681612951565b9250602084013561299681612951565b929592945050506040919091013590565b600080604083850312156129ba57600080fd5b82356129c581612951565b915060208301356129d581612951565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715612a1e57612a1e6129e0565b604052919050565b60006001600160401b03821115612a3f57612a3f6129e0565b5060051b60200190565b600082601f830112612a5a57600080fd5b81356020612a6f612a6a83612a26565b6129f6565b82815260059290921b84018101918181019086841115612a8e57600080fd5b8286015b84811015612aa95780358352918301918301612a92565b509695505050505050565b600080600060608486031215612ac957600080fd5b8335612ad481612951565b925060208401356001600160401b03811115612aef57600080fd5b612afb86828701612a49565b925050604084013590509250925092565b6001600160a01b0391909116815260200190565b600060208284031215612b3257600080fd5b8135612b3d81612951565b9392505050565b60008060008060808587031215612b5a57600080fd5b8435612b6581612951565b935060208501356001600160401b03811115612b8057600080fd5b612b8c87828801612a49565b949794965050505060408301359260600135919050565b801515811461227d57600080fd5b600080600060608486031215612bc657600080fd5b8335612bd181612951565b92506020840135612be181612ba3565b91506040840135612bf181612951565b809150509250925092565b60006020808385031215612c0f57600080fd5b82356001600160401b03811115612c2557600080fd5b8301601f81018513612c3657600080fd5b8035612c44612a6a82612a26565b81815260059190911b82018301908381019087831115612c6357600080fd5b928401925b828410156128a8578335612c7b81612951565b82529284019290840190612c68565b600060208284031215612c9c57600080fd5b5035919050565b600060208284031215612cb557600080fd5b8151612b3d81612ba3565b6020808252601e908201527f456c6b56324661726d4d616e616765723a20554e4b4e4f574e5f4641524d0000604082015260600190565b600060208284031215612d0957600080fd5b8151612b3d81612951565b6001600160a01b0392831681529116602082015260400190565b6020808252601b908201527a22b635ab192330b936a6b0b730b3b2b91d102727aa2fa7aba722a960291b604082015260600190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201612dc557612dc5612d9d565b5060010190565b600081518084526020808501945080840160005b83811015612dfc57815187529582019590820190600101612de0565b509495945050505050565b604081526000612e1a6040830185612dcc565b90508260208301529392505050565b80820180821115612e3c57612e3c612d9d565b92915050565b606081526000612e556060830186612dcc565b60208301949094525060400152919050565b60005b83811015612e82578181015183820152602001612e6a565b50506000910152565b60008251612e9d818460208701612e67565b9190910192915050565b6020815260008251806020840152612ec6816040850160208701612e67565b601f01601f1916919091016040019291505056fea26469706673582212208b5823e931265c5baf19b48630847d6019c2d4804e7f9503e68350fb38ea8b5264736f6c63430008120033";

type ElkV2FarmManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ElkV2FarmManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ElkV2FarmManager__factory extends ContractFactory {
  constructor(...args: ElkV2FarmManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _factoryAddress: AddressLike,
    _minDelayBeforeStop: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _factoryAddress,
      _minDelayBeforeStop,
      overrides || {}
    );
  }
  override deploy(
    _factoryAddress: AddressLike,
    _minDelayBeforeStop: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _factoryAddress,
      _minDelayBeforeStop,
      overrides || {}
    ) as Promise<
      ElkV2FarmManager & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ElkV2FarmManager__factory {
    return super.connect(runner) as ElkV2FarmManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ElkV2FarmManagerInterface {
    return new Interface(_abi) as ElkV2FarmManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ElkV2FarmManager {
    return new Contract(address, _abi, runner) as unknown as ElkV2FarmManager;
  }
}

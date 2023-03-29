# FaaS (Farm as a Service)

FaaS (Farm as a Service) is a smart contract-based project that allows users to create their own FarmingRewards contracts to distribute rewards to liquidity providers. This repository contains the Solidity contracts, tests, and necessary scripts for the FaaS system.

This project was built with hardhat.  

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Tests](#running-tests)
- [Usage](#usage)
- [Authors](#authors)
- [License](#license)

## Features

- Create FarmingRewards contracts for distributing rewards to liquidity providers
- Permissioned FarmingRewards contracts for added security and control
- Fee collection for creating new FarmingRewards contracts
- Integration with ElkFinance's ecosystem

## Getting Started

Follow these instructions to set up the FaaS repository on your local machine.

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your system. You can download Node.js from https://nodejs.org/.

### Installation

1. Clone the repository to your local machine:

```sh
git clone https://github.com/elkfinance/faas
```

2. Navigate to the project folder:

```sh
cd faas
```

3. Install the project dependencies:

```sh
npm install
```

### Running Tests

1. Run the tests:

```sh
npm run test
```

## Usage

The FaaS system is comprised of two main contracts: "ElkFarmFactory" (located at ./contracts/ElkFarmFactory.sol) and "FarmingRewards" (located at ./contracts/FarmingRewards.sol). The ElkFarmFactory contract is the main contract that users interact with to create new FarmingRewards contracts. The FarmingRewards contract is the contract that distributes rewards to liquidity providers.

## Authors

- Seth <seth@elklabs.org>
- Baal <baal@elklabs.org>
- Elijah <elijah@elklabs.org>
- Snake <snake@elklabs.org>

## License

See included LICENSE.

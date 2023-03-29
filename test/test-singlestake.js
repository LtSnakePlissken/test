const hre = require("hardhat");
const { expect } = require("chai");
const SingleStakeFactoryArtifact = require('../artifacts/contracts/SingleStakeFactory.sol/ElkSingleStakeFactory.json');
const SingleStakeArtifact = require('../artifacts/contracts/SingleStakingRewards.sol/SingleStakingRewards.json');
const SingleStakeManagerArtifact = require('../artifacts/contracts/SingleStakeManager.sol/SingleStakeManager.json');
const ERC20 = require('../artifacts/contracts/interfaces/IElkERC20.sol/IElkERC20.json');


describe("Single Stake Test", function() {

    const _reward = hre.ethers.utils.parseEther("1");
    const _elkToken = "0xeEeEEb57642040bE42185f49C52F7E9B38f8eeeE";

    let _stakingTokenAddress = _elkToken;
    let _rewardTokenAddresses = [_elkToken];
    let _rewardsDuration = 2592000;
    let _depositFeeBps = 100;
    let _withdrawalFeesBps = [2000, 1000, 0]
    let _withdrawalFeesSchedule = [648000, 1296000, 1944000];


    before(async function () {
        this.SingleStake = await hre.ethers.getContractFactory("SingleStakingRewards");
        this.SingleStakeRewards = await this.SingleStake.deploy(_stakingTokenAddress, _rewardTokenAddresses, _rewardsDuration, _depositFeeBps, _withdrawalFeesBps, _withdrawalFeesSchedule);
        this.deployed = await this.SingleStakeRewards.deployed();
    });

    describe("SingleStakeRewards Contract", function () {

        it("Should return a successful confirmation of SingleStake deployment", function () {
          expect(this.deployed.deployTransaction.confirmations).to.equal(1);
          expect(hre.ethers.utils.isAddress(this.deployed.deployTransaction.creates)).to.be.true;
        });
    
    });

    describe("Single Stake Manager", function () {

        before(async function () {
    
          // Need to get an account that has the Elk Token to pay the creation fee.
          // Check balances, and change the account and tokens as needed.
    
          await hre.network.provider.request({
            method: 'hardhat_impersonateAccount',
            params: ["0x58f937C1075eB9c466cBBac8FC02314ea99408Af"]
          });
    
          this.account = hre.ethers.provider.getSigner("0x58f937C1075eB9c466cBBac8FC02314ea99408Af");
    
          this.currentBlock = await hre.ethers.provider.getBlockNumber();
          this.newContracts = []
    
          this.SingleStakeFactory = await (await hre.ethers.getContractFactory("ElkSingleStakeFactory")).deploy();
          this.SingleStakeFactoryAddress = this.SingleStakeFactory.deployTransaction.creates;
          
          this.SingleStakeManager = await (await hre.ethers.getContractFactory("SingleStakeManager")).deploy(this.SingleStakeFactoryAddress);
          this.SingleStakeManagerAddress = this.SingleStakeManager.deployTransaction.creates;
    
        });
    
        it("Should return a successful confirmation of FarmFactory deployment", async function () {
          expect(this.SingleStakeFactory.deployTransaction.confirmations).to.equal(1);
          expect(hre.ethers.utils.isAddress(this.SingleStakeFactoryAddress)).to.be.true;
        });
    
        it("Should return a successful confirmation of FarmManager deployment", async function () {
          expect(this.SingleStakeManager.deployTransaction.confirmations).to.equal(1);
          expect(hre.ethers.utils.isAddress(this.SingleStakeManagerAddress)).to.be.true;
        });
    
        it("Should successfully set the farmManager address in the FarmFactory contract", async function () {
          await this.SingleStakeFactory.setManager(this.SingleStakeManagerAddress);
          let returnedAddress = await this.SingleStakeFactory.farmManager();
          expect(returnedAddress).to.equal(this.SingleStakeManagerAddress);
        });

        describe("SingleStakeRewards contract creation through SingleStakeFactory", function () {

            before(function () {
              let SingleStakeFactoryContract = new hre.ethers.Contract(this.SingleStakeFactoryAddress, SingleStakeFactoryArtifact.abi);
              this.SingleStakeFactoryInstance = SingleStakeFactoryContract.connect(this.account);
              this.elkTokenContract = new hre.ethers.Contract(_elkToken, ERC20.abi, hre.ethers.provider);
            })
      
            it("Should pay the fee and create a new SingleStakeRewards contract using createNewRewards", async function () {
      
              let feeToBePaid = BigInt(await this.SingleStakeFactory.fee());
      
              // approve the SingleStakeFactory to pay fee from sending account 
              let elkContractInstance = this.elkTokenContract.connect(this.account);
              await elkContractInstance.approve(this.SingleStakeFactoryAddress, feeToBePaid);
      
              let startingBalance = BigInt(await this.elkTokenContract.balanceOf(this.account._address));
              
              // create the new contract through the SingleStakeFactory
              let newContractTx = await this.SingleStakeFactoryInstance.createNewSingleStake(_stakingTokenAddress, _rewardTokenAddresses, _rewardsDuration, _depositFeeBps, _withdrawalFeesBps, _withdrawalFeesSchedule);
      
              let endingBalance = BigInt(await this.elkTokenContract.balanceOf(this.account._address));
      
              expect(newContractTx.confirmations).to.equal(1);
              expect(endingBalance).to.equal(startingBalance - feeToBePaid);
      
            });
        
            it("Should emit an event with the new contract address", async function () {
              let eventFilter = this.SingleStakeFactory.filters.ContractCreated();
              let events = await this.SingleStakeFactory.queryFilter(eventFilter, this.currentBlock - 10);
              let FFInterface = new hre.ethers.utils.Interface(SingleStakeFactoryArtifact.abi);
              let parsedEvents = events.map((event) => FFInterface.parseLog(event));

              for (let i = 0; i < parsedEvents.length; i++) {
                this.newContracts.push(parsedEvents[i].args._newContract);
              }

              for (let i = 0; i < this.newContracts.length; i++) {
                expect(hre.ethers.utils.isAddress(this.newContracts[i])).to.be.true;
              }

            });
            
            it("Should set the owner of the newly created contract to the SingleStakeManager address", async function () {
              let newContract = this.SingleStakeRewards.attach(this.newContracts[0]);
              newOwner = await newContract.owner();
              expect(newOwner).to.equal(this.SingleStakeManager.address);
            });
      
            it("Should store the created contracts in FaaS contract, acccessed though getSingleStake", async function () {
              let getSingleStake = await this.SingleStakeFactory.getSingleStake(this.account._address, _stakingTokenAddress);
              expect(getSingleStake).to.equal(this.newContracts[0]);
            }); 
      
            it("Should store the creator for each SingleStake, acccessed though getCreator", async function () {
              let getCreator = await this.SingleStakeFactory.getCreator(this.newContracts[0]);
              expect(getCreator).to.equal(this.account._address);
            }); 
        
            it("Should be able to access functions in newly created contract", async function () {
              let newContract = this.SingleStakeRewards.attach(this.newContracts[0]);
              let newStakingToken = await newContract.stakingToken();
              let newTotalSupply = await newContract.totalSupply();
              expect(newStakingToken).to.equal(_stakingTokenAddress);
              expect(newTotalSupply).to.equal(0);
            });
      
        });
        
        describe("SingleStakeManager functions", function () {
      
            before(function () {
              this.SingleStakeManagerContract = new hre.ethers.Contract(this.SingleStakeManagerAddress, SingleStakeManagerArtifact.abi);
              this.SingleStakeManagerInstance = this.SingleStakeManagerContract.connect(this.account);
              this.rewardsTokenContract = new hre.ethers.Contract(_elkToken, ERC20.abi, hre.ethers.provider);  // using elk for reward token
              this.newContract = this.SingleStakeRewards.attach(this.newContracts[0]);
      
            })
      
            it("Should be able to send rewards and start emissions when called from creator account", async function () {
      
              let rewardsTokenInstance = this.rewardsTokenContract.connect(this.account);
      
              // account for decimals of token
              let decimals = await rewardsTokenInstance.decimals();
              let normalizedReward = BigInt(_reward / 10 ** (18 - decimals));
      
              // need to approve token for SingleStakeRewards contract to spend
              await rewardsTokenInstance.approve(this.newContract.address, normalizedReward);

              // need to send rewards to newly created farm contract
              await rewardsTokenInstance.transfer(this.newContract.address, normalizedReward);
              
              // start emissions called from creator
              await this.SingleStakeManagerInstance.startEmission(this.newContract.address, [normalizedReward], 2592000);
      
              let eventFilter = this.newContract.filters.RewardsEmissionStarted();
              let events = await this.newContract.queryFilter(eventFilter, this.currentBlock - 10);
              let FRInterface = new hre.ethers.utils.Interface(SingleStakeArtifact.abi);
              let parsedEvents = events.map((event) => FRInterface.parseLog(event));
              
              let returnedReward = parsedEvents[0].args._rewards;

              expect(returnedReward[0]).to.equal(_reward);
              
            });
      
            it("Should be able to stop rewards when called from creator account", async function () {
              let startingAccountBalance = BigInt(await this.rewardsTokenContract.balanceOf(this.account._address));
              let rewardRate = BigInt(await this.newContract.rewardRates(_elkToken));
              let periodFinish = await this.newContract.periodFinish();

              await this.SingleStakeManagerInstance.stopEmission(this.newContract.address);

              let timestamp = BigInt((await hre.ethers.provider.getBlock(await hre.ethers.provider.getBlockNumber())).timestamp); // must get after call to contract to simulate time passing
              let remaining = BigInt(periodFinish) - BigInt(timestamp);
              
              let expected_balance = startingAccountBalance + (rewardRate * remaining)

              let endingAccountBalance = BigInt(await this.rewardsTokenContract.balanceOf(this.account._address));
              expect(endingAccountBalance).to.equal(expected_balance);
            });
      
        });

        describe("Changing ownership", function () {

            it("Should change ownership of a farm in SingleStakeFactory when called from SingleStakeFactory owner", async function () {
              let ownerAccount = await hre.ethers.getSigner();
      
              // calling from the owner of SingleStakeFactory
              await this.SingleStakeFactory.overrideOwnership(this.newContracts[0]);
      
              let returnedSingleStakeAddress = await this.SingleStakeFactory.getSingleStake(ownerAccount.address, _stakingTokenAddress);
              let returnedCreator = await this.SingleStakeFactory.getCreator(this.newContracts[0]);
      
              expect(returnedSingleStakeAddress).to.equal(this.newContracts[0]);
              expect(returnedCreator).to.equal(ownerAccount.address);
      
            });
      
          });

    });

});
import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
    console.log(`Running deploy script for the Greeter contract`);

    // Initialize the wallet. 
    const wallet = new Wallet("");

    // Create deployer object and load the artifact of the contract we want to deploy.
    const deployer = new Deployer(hre, wallet);

    // await deposit(deployer)

    await deployAnyToken(deployer)

    await deployRouter(deployer)
}

async function deposit(deployer: Deployer) {
    // Deposit some funds to L2 in order to be able to perform L2 transactions.
    const depositAmount = ethers.utils.parseEther("0.001");
    const depositHandle = await deployer.zkWallet.deposit({
        to: deployer.zkWallet.address,
        token: utils.ETH_ADDRESS,
        amount: depositAmount,
    });
    // Wait until the deposit is processed on zkSync
    await depositHandle.wait();
}

async function deployAnyToken(deployer: Deployer) {
    const artifact = await deployer.loadArtifact("AnyswapV6ERC20");

    // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
    // `greeting` is an argument for contract constructor.
    const name = "anyToken";
    const symbol = "anyToken";
    const decimals = 18;
    const underlying = ethers.constants.AddressZero;
    const vault = deployer.ethWallet.address;
    const anyTokenContract = await deployer.deploy(artifact, [name, symbol, decimals, underlying, vault]);

    // Show the contract info.
    const contractAddress = anyTokenContract.address;
    console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
}

async function deployRouter(deployer: Deployer) {
    const artifact = await deployer.loadArtifact("AnyswapV6Router");

    // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
    // `greeting` is an argument for contract constructor.
    const factory = ethers.constants.AddressZero;
    const wNATIVE = ethers.constants.AddressZero;
    const mpc = deployer.ethWallet.address;
    const routerContract = await deployer.deploy(artifact, [factory, wNATIVE, mpc]);

    // Show the contract info.
    const contractAddress = routerContract.address;
    console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
}

## system contract

```text
https://github.com/matter-labs/v2-testnet-contracts/blob/6a93ff85d33dfff0008624eb9777d5a07a26c55d/l2/system-contracts/Constants.sol
```

## Prerequisites

```text
yarn package manager. npm examples will be added soon
Docker for compilation.
A wallet with some Görli ETH on L1 (Görli USDC is also required for the ERC-20 tutorial) to pay for bridging funds to zkSync as well as deploying smart contracts.
```

## step

```plaintext
1) mkdir dir
	mkdir demo
2) cd dir
	cd demo
3) init
	yarn init -y
4) add Dependencies
	yarn add -D typescript ts-node ethers zksync-web3 hardhat @matterlabs/hardhat-zksync-solc @matterlabs/hardhat-zksync-deploy
5) mkdir contract and deploy dir
	mkdir contracts 
	mkdir deploy 
6) add contract file in contract dir
7) compile contract
	yarn hardhat compile
8) add deploy file in deploy dir
9) deploy contract
	yarn hardhat deploy-zksync
```

## contract address

```text
zkSync:
	anytoken: 0x550d71aba0cfb74003ab0aaf731f796d78d93e6b
	router: 0x23759c89b02fdfb1221e4223462e41782b5687d9

rinkeby:
	anytoken: 0xbdc3D1BA34fc421E60d495174cd82e8bF5AC17ec
	router: 0x89F1250a2DaBF4FF11A9FC72E657C9381949fdfF
	config: 0x875C53D59D9a38143e86510Bf2AbB26278040739
```

## question

```plaintext
1) docker error
	sudo groupadd docker 
	sudo usermod -aG docker $USER
```

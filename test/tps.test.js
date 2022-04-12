const HDWalletProvider = require('@truffle/hdwallet-provider');
const { type, stringify } = require('mocha/lib/utils');
const Web3 = require('web3');

const provider = new HDWalletProvider (
'young level disagree witness mistake shell task tunnel you umbrella portion during',
'https://rinkeby.infura.io/v3/0bbf68499af84ea79b7971272280fe92'
);
const web3 = new Web3(provider);


async function main() {
    const accounts = await web3.eth.getAccounts();
    const address = '0x30fb027432bc0bcf760079319feAa0542eEaf91C';
    const abi = [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_size",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_price",
            "type": "string"
          }
        ],
        "name": "addDrink",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "buy",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "customer",
        "outputs": [
          {
            "internalType": "address payable",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "customers",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "drinks",
        "outputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "size",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "price",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_index",
            "type": "uint256"
          }
        ],
        "name": "getDrinkList",
        "outputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "size",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "price",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "manager",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "stateMutability": "payable",
        "type": "receive"
      }
    ];
      
    const tps = await new web3.eth.Contract(abi, address);
    //const balance = await web3.eth.getBalance(accounts[0]);


    //await tps.methods.addDrink('Cola','0.5 L', '2 EUR');

    list = await tps.methods.getDrinkList(0);
     
    console.log(list);
    provider.engine.stop();
  }
  
  main();
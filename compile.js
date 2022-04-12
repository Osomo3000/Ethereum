const path = require('path');
const fs = require('fs');
const solc = require('solc');


const vendingPath = path.resolve(__dirname, 'contracts', 'Vending.sol');
const source = fs.readFileSync(vendingPath, 'utf8');


const input = {
  language: 'Solidity',
  sources: {
    'Vending.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['abi','evm.bytecode'],
      },
    },
  },
};
 

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  'Vending.sol'
].VendingMachine;
 


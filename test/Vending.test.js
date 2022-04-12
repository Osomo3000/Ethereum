const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { abi, evm }=require('../compile');

let accounts;
let tps;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  tps = await new web3.eth.Contract(abi)
    .deploy({
      data: evm.bytecode.object,
    })
    .send({ from: accounts[0], gas: '1000000' });
});


describe('Tps',()=> {
    it('deploys a contract', () =>{
        assert.ok(tps.options.address);
    });

    it('add Drink',async() =>{
        const counter = await tps.methods.addDrink('Coca Cola','0.5 L', '2€');
    });

    it('get Drink List',async() =>{
        const counter = await tps.methods.getDrinkList(0)
    });
});
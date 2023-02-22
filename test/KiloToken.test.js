const KiloToken = artifacts.require("KiloToken");

var chai = require("chai");

const BN = web3.utils.BN;
const chaiBN = require("chai-bn")(BN);
chai.use(chaiBN);

var chaiAsPromised = require("chai-as-promised");
const { contracts_build_directory } = require("../truffle/truffle-config");
chai.use(chaiAsPromised);

const expect = chai.expect;

contract("Kilo Token Test", async (accounts) => {
    it("all tokens should be in my account", async () => {
        //define test case
        let instance = await KiloToken.deployed();
        let totalSupply = await instance.totalSupply();
        expect(await instance.balanceOf(accounts[0])).to.be.a.bignumber.equal(totalSupply);
    })
});

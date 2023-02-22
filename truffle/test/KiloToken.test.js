const KiloToken = artifacts.require("KiloToken");

const chai = require("./chaisetup.js");
const BN = web3.utils.BN;
const expect = chai.expect;

contract("Kilo Token Test", async (accounts) => {
  const [initialHolder, recipient, anotherAccount] = accounts;

  it("all tokens should be in my account", async () => {
    //define test case
    let instance = await KiloToken.deployed();
    let totalSupply = await instance.totalSupply();
    return expect(await instance.balanceOf(initialHolder)).to.be.a.bignumber.equal(
      totalSupply
    );
  });

 
});

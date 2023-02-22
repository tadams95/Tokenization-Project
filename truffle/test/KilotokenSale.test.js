const KiloToken = artifacts.require("KiloToken");
const KiloTokenSale = artifacts.require("KiloTokenSale");

const chai = require("./chaisetup.js");
const BN = web3.utils.BN;
const expect = chai.expect;

contract("KiloTokenSale", async function(accounts) {
    const [ initialHolder, recipient, anotherAccount ] = accounts;

it("there shouldnt be any coins in my account", async () => {
    let instance = await KiloToken.deployed();
    return expect(instance.balanceOf.call(initialHolder)).to.eventually.be.a.bignumber.equal(new BN(0));
    });

    //other code in test

it("all coins should be in the KiloTokenSale smart contract", async () => {
    let instance = await KiloToken.deployed();
    let balance = await instance.balanceOf.call(KiloTokenSale.address);
    let totalSupply = await instance.totalSupply.call();
    return expect(balance).to.be.a.bignumber.equal(totalSupply);
});

it("should be possible to buy one token by simply sending ether to the smart contract", async () => {
    let tokenInstance = await KiloToken.deployed();
    let tokenSaleInstance = await KiloTokenSale.deployed();
    let balanceBeforeAccount = await tokenInstance.balanceOf.call(recipient);

    await expect(tokenSaleInstance.sendTransaction({from: recipient, value: web3.utils.toWei("1", "wei")})).to.be.fulfilled;
    return expect(balanceBeforeAccount + 1).to.be.bignumber.equal(await tokenInstance.balanceOf.call(recipient));

});


});

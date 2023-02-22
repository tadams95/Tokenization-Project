const KiloToken = artifacts.require("KiloToken");

const KiloTokenSale = artifacts.require("KiloTokenSale");

module.exports = async function (deployer) {
  let addr = await web3.eth.getAccounts();
  await deployer.deploy(KiloToken, 10000000000);
  await deployer.deploy(KiloTokenSale, 1, addr[0], KiloToken.address);
  let instance = await KiloToken.deployed();
  await instance.transfer(KiloTokenSale.address, 10000000000);
};

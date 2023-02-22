const KiloToken = artifacts.require("KiloToken");

const KiloTokenSale = artifacts.require("KiloTokenSale");

require("dotenv").config({ path: "../../.env" });
// console.log(process.env);

module.exports = async function (deployer) {
  let addr = await web3.eth.getAccounts();
  await deployer.deploy(KiloToken, process.env.INITIAL_TOKENS);
  await deployer.deploy(KiloTokenSale, 1, addr[0], KiloToken.address);
  let instance = await KiloToken.deployed();
  await instance.transfer(KiloTokenSale.address, process.env.INITIAL_TOKENS);
};

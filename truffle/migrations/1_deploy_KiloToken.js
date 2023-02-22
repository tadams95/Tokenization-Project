const KiloToken = artifacts.require("KiloToken");

module.exports = async function (deployer) {
  await deployer.deploy(KiloToken, 10000000000);
};

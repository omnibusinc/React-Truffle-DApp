var ConvertLib = artifacts.require("./ConvertLib.sol");
var ExampleCoin = artifacts.require("./ExampleCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, ExampleCoin);
  deployer.deploy(ExampleCoin);
};

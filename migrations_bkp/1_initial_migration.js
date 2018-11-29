var Migrations = artifacts.require("./Migrations.sol");
var StudentPerformance = artifacts.require("./StudentPerformance");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(StudentPerformance);
};

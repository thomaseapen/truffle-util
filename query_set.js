var contract = artifacts.require("StudentPerformance");

var contract_address = '0x57f6e9596693364d33fd7c35ae525568a350cbae';

module.exports = function() {

  async function getCertifiedStudentsCount() {
    let ins = await contract.at(contract_address);
    await ins.setName('thomas');
    await ins.addSubjectDetails('Math',65);
  }
  getCertifiedStudentsCount();
}

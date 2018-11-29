module.exports = function() {

  async function getEthereumStats() {
	let block = await web3.eth.getBlock("latest");
	console.log("Block Number : "+block.number);
  }
  getEthereumStats();
}

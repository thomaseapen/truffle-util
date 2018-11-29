module.exports = function() {

function getAccountTransactions(accAddress, startBlockNumber, endBlockNumber) {

	console.log(web.eth.accounts[0]);
	web3.eth.filter({
	address: accAddress,
	fromBlock: startBlockNumber,
	toBlock: 'latest'
	}).get(function (err, result) {
	console.log(result);// callback code here
})



}

getAccountTransactions('0x57f6e9596693364d33fd7c35ae525568a350cbae',1,16);
}

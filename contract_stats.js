module.exports = function() {

function getAccountTransactions(accAddress, startBlockNumber, endBlockNumber) {
  // You can do a NULL check for the start/end blockNumber

  console.log("Searching for transactions to/from account \"" + accAddress + "\" within blocks "  + startBlockNumber + " and " + endBlockNumber);

  for (var i = startBlockNumber; i <= endBlockNumber; i++) {
    var block = web3.eth.getBlock(i, true);

    if (block != null && block.transactions != null) {
      block.transactions.forEach( function(e) {
        if (accAddress == "*" || accAddress == e.from || accAddress == e.to) {
          console.log("  tx hash          : " + e.hash + "\n"
            + "   nonce           : " + e.nonce + "\n"
            + "   blockHash       : " + e.blockHash + "\n"
            + "   blockNumber     : " + e.blockNumber + "\n"
            + "   transactionIndex: " + e.transactionIndex + "\n"
            + "   from            : " + e.from + "\n" 
            + "   to              : " + e.to + "\n"
            + "   value           : " + e.value + "\n"
            + "   gasPrice        : " + e.gasPrice + "\n"
            + "   gas             : " + e.gas + "\n"
            + "   input           : " + e.input);
        }
      })
    }
  }
}

getAccountTransactions('0x57f6e9596693364d33fd7c35ae525568a350cbae',1,16);
}

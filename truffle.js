/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
	networks: {
      nodeOne : {
        host:"localhost",
        port : 22000,
        network_id: "*",
        gas: 3500000,
        gasPrice:0
    },
      nodeTwo : {
        host:"10.11.4.222",
        port : 11002,
        network_id: "*",
        gas: 3500000,
        gasPrice:0
    },
      nodeThree : {
        host:"10.11.4.222",
        port : 11003,
        network_id: "*",
        gas: 4500000,
   },
      nodeFour : {
        host:"10.11.4.222",
        port : 11004,
        network_id: "*",
        gas: 4500000,
   }
}

};

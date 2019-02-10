// Allows us to use ES6 in our migrations and tests.
require('babel-register')
var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = 'Metamask’s seed';

// Edit truffle.config file should have settings to deploy the contract to the Rinkeby Public Network.
// Infura should be used in the truffle.config file for deployment to Rinkeby.

module.exports = {
  networks: {
    ganache: {
      host: '127.0.0.1',
      port: 9545,
      network_id: '*' // Match any network id
    },
    rinkeby: {
 provider: function() {
return new HDWalletProvider(mnemonic, "Your Rinkeby Endpoint Link of Infura")
    },
     network_id: '4',
     gas: 4500000,
     gasPrice: 10000000000,
   }
  }
};

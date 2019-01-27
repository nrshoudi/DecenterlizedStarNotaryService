// Allows us to use ES6 in our migrations and tests.
require('babel-register')
var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = 'attend usual frequent original drastic energy guard grace moment boil ability weasel';

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
return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/14d869e286754b0a9c3d3a85378e4e00")
    },
     network_id: '4',
     gas: 4500000,
     gasPrice: 10000000000,
   }
  }
};

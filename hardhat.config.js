// require('@nomiclabs/hardhat-waffle');

// module.exports = {
//   solidity: '0.8.11',
//   networks: {
//     rinkeby: {
//       url: 'https://eth-rinkeby.alchemyapi.io/v2/nXTtoXZd49GQtRbsze7zOtdVbw3LaBmE',
//       accounts: ['f583eee4a8538439de90ae8b88fb36d95ad19ea5c121eef70e86c0105c321975'],
//     },
//   },
// };



require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.11",
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "HKYDVZGY81P4UCZ16ARZH2K39QHZQQEHSH",
  },
  networks: {
    rinkeby: {
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      chainId: 1,
      url: process.env.PROD_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    
  },
};
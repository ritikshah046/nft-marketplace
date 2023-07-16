// const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
require('@nomiclabs/hardhat-waffle');

// const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    polygon_mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/UIG2JpZrG2notIllsOZ2TN31ZASns4cU',
      accounts: [
        `0x${'d3abbf65ce06356d624928dd80654d8ab63901ae96550ca2716bb182a47f203d'}`,
      ],
    },
  },
  solidity: '0.8.4',
};

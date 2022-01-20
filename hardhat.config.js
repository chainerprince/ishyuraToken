//https://eth-ropsten.alchemyapi.io/v2/8vyObNhVehkCMWyQjA9Zb4tVc4byDB89

// const { solidity } = require("ethereum-waffle");
require('dotenv').config();

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks:{
    ropsten:{
        url:process.env.ALCHEMY_API,
        accounts:[process.env.ROPSTEN_PRIVATE_KEY]
    }
  }
}
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    dashboard: {
      url: "http://localhost:24012/rpc",
    },
  },
};

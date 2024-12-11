const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
module.exports = buildModule("Identify", (m) => {
  const identiFi = m.contract("Identify");
  return { identiFi };
});

const RandomNumber = artifacts.require("RandomNumberGenerator.sol");
const YodaLottery = artifacts.require("YodaLottery.sol");

const vrfCoordinatorMumbai = "0x8C7382F9D8f56b33781fE506E897a4F1e2d17255";
const linkTokenMumbai = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";
const tokenAdd = "0xce746F6E5E99d9EE3457d1dcE5F69F4E27c12BD4";

module.exports = async function (deployer, network) {
  if (network == "mumbai") {
    const randomGenerator = await deployer.deploy(
      RandomNumber,
      vrfCoordinatorMumbai,
      linkTokenMumbai
    );
    const lottery = await deployer.deploy(
      YodaLottery,
      tokenAdd,
      RandomNumber.address
    );
    console.log(`RandomNumber depoyed to: ${RandomNumber.address}`);
    console.log(`Lottery deployed to ${YodaLottery.address}`);
  }
};

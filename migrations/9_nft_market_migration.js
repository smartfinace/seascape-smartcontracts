var NftMarket = artifacts.require("./NftMarket.sol");
var Crowns = artifacts.require("./CrownsToken.sol");



async function getAccount(id) {
    let accounts = await web3.eth.getAccounts();
    return accounts[id];
}


const tipsFeeRate = 100;	// 10%

module.exports = function(deployer, network) {
      if (network == "ganache") {
        var feesReciever = getAccount(3);
        deployer.deploy(NftMarket, Crowns.address, feesReciever, tipsFeeRate)
         .then(function(){
            console.log("Market contract was deployed at address: "+NftMarket.address);
            console.log("It is using Crowns (CWS) Token at address: "+Crowns.address);
        });
      }
      else if (network == "rinkeby") {
          var feesReciever = "0x5bDed8f6BdAE766C361EDaE25c5DC966BCaF8f43";

          deployer.deploy(NftMarket, "0x168840Df293413A930d3D40baB6e1Cd8F406719D", feesReciever, tipsFeeRate)
           .then(function(){
              console.log("Market contract was deployed at address: "+NftMarket.address);
          });
        }
};

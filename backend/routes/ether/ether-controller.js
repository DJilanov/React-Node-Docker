const { etherScanServices } = require('../../integrations/etherScan-services');

const modelName = 'Ether';

const etherController = (repository) => {
  const saveEtherData = async (etherData) => {
    return repository.create({ modelName, newObject: etherData })
      .catch(error => console.log(error));
  };

  const getEtherPriceByTimestamp = async (req, res) => {
    const { timestamp } = req.query;
    repository.find({ modelName })
      .then((response) => {
        closest(+timestamp, response).then((result) => {
          res.status(200).send(result);
        });
      })
      .catch((error) => {
        res.json(error);
      });
  };

  const sync = async () => {
    const etherPriceUsd = await etherScanServices().getETHUSDPrice();
    let date = new Date();
    saveEtherData({
      priceUSD: etherPriceUsd,
      createdAt: +date
    });
  };

  const closest = async (num, arr) => {
    let curr = arr[0]
    for(let counter = 0; counter < arr.length; counter++) {
      if(Math.abs(num - arr[counter].createdAt) < Math.abs(num - curr.createdAt)) {
        curr = arr[counter]
      }
    }
    return curr
  }

  return {
    sync,
    getEtherPriceByTimestamp
  };
};

module.exports = etherController;

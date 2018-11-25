const modelName = 'FiatFx';
const currencies = require('./fiat-fx-currencies.json');

const fiatFxController = (repository) => {
  const marketService = require('../../services/market-service')(repository);

  const createFiatFx = async (weiFiatFxData) => {
    return repository.create({ modelName, newObject: weiFiatFxData })
      .catch(error => console.log(error));
  };

  const getCurrenciesByTimestamp = async (req, res) => {
    const { id } = req.params;
    repository.findById({ modelName, id })
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((error) => {
        res.json(error);
      });
  };

  const sync = async () => {
    const worldCurrencies = await marketService.getTickersFromCurrencyLayerApi().catch(err => {
      console.log(err)
    });
    let date = new Date();
    worldCurrencies.forEach(async (currency, index) => {
      let fxName = currency.pair.replace('USD', '');
      if(!currencies.indexOf(fxName)) {
        return;
      }
      let promise = createFiatFx({
        fxName: fxName,
        priceUSD: 1 / +currency.last,
        createdAt: +date
      });
      if (index === worldCurrencies.length - 1) {
        return promise
      }
    });
  };

  return {
    sync,
    getCurrenciesByTimestamp
  };
};

module.exports = fiatFxController;

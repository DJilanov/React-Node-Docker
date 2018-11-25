const { CronJob } = require('cron');
const { krakenServices } = require('../integrations/kraken-services');
const { bittrexServices } = require('../integrations/bittrex-services');
const { coinMarketCapServices } = require('../integrations/coinMarketCap-services');
const { currencyLayerApiService } = require('../integrations/currencyLayerApi-service');

const marketService = (repository) => {
  const getTickersFromKraken = async (currenciesToGet) => {
    try {
      const baseCurrencies = currenciesToGet || 'XETHXXBT,XXBTZEUR,XXBTZJPY,XXBTZUSD';
      const currencyDictionary = {
        XETHXXBT: 'ETH',
        XXBTZEUR: 'EUR',
        XXBTZJPY: 'JPY',
        XXBTZUSD: 'USD',
      };
      const tickers = await krakenServices().getTickers(baseCurrencies);
      const currentTickerPairs = [];
      Object.keys(tickers).forEach((currency) => {
        currentTickerPairs.push({
          pair: currencyDictionary[currency],
          last: tickers[currency].c[0],
        });
      });

      return currentTickerPairs;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const getTickersFromCurrencyLayerApi = async () => {
    try {
      const tickers = await currencyLayerApiService().getTickers();
      const currentTickerPairs = [];
      for (let currency in tickers.quotes) {
        if (tickers.quotes.hasOwnProperty(currency)) {
          currentTickerPairs.push({
            pair: currency,
            last: tickers.quotes[currency]
          });
        }
      }
      return currentTickerPairs;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const syncTickersFromKraken = async (currenciesToGet) => {
    try {
      const currentTickerPairs = await getTickersFromKraken(currenciesToGet);
      await repository.removeAll({ modelName: 'Ticker' });

      repository.createMany({ modelName: 'Ticker', newObjects: currentTickerPairs });
    } catch (error) {
      console.log(error);
    }
  };

  const saveTickersFromKrakenToHistory = async (currenciesToGet) => {
    try {
      const currentTickerPairs = await getTickersFromKraken(currenciesToGet);

      repository.createMany({ modelName: 'TickerHistory', newObjects: currentTickerPairs });
    } catch (error) {
      console.log(error);
    }
  };

  const syncTickersFromCoinMarketCap = async (convertCurrency = 'BTC') => {
    try {
      const tickers = await coinMarketCapServices().getTickers(convertCurrency);

      await repository.removeAll({ modelName: 'MarketPriceHistory' });
      repository.createMany({ modelName: 'MarketPriceHistory', newObjects: tickers });
    } catch (error) {
      console.log(error);
    }
  };

  const syncCurrenciesFromApi = async () => {
    try {
      const currencies = await bittrexServices().getCurrencies();

      await repository.removeAll({ modelName: 'Currency' });
      repository.createMany({ modelName: 'Currency', newObjects: currencies });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    syncTickersFromKraken,
    saveTickersFromKrakenToHistory,
    syncTickersFromCoinMarketCap,
    syncCurrenciesFromApi,
    getTickersFromKraken,
    getTickersFromCurrencyLayerApi
  };
};

module.exports = marketService;

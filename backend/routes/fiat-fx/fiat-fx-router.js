const { Router } = require('express');

const attachTo = (app, repository, jobs) => {
  const router = new Router();
  const fiatFxController = require('./fiat-fx-controller')(repository);

  router
    .get('/currenciesByTimestamp', fiatFxController.getCurrenciesByTimestamp)

  app.use('/fiat', router);
};

module.exports = { attachTo };

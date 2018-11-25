const { Router } = require('express');

const attachTo = (app, repository, jobs) => {
  const router = new Router();
  const etherController = require('../ether/ether-controller')(repository);
  const fiatFxController = require('../fiat-fx/fiat-fx-controller')(repository);

  router
    .get('/etherPrice', etherController.sync)
    .get('/fiatCurrencies', fiatFxController.sync)

  app.use('/sync', router);
};

module.exports = { attachTo };

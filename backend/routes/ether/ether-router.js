const { Router } = require('express');

const attachTo = (app, repository) => {
  const router = new Router();
  const etherController = require('./ether-controller')(repository);

  router
    .get('/etherPriceByTimestamp', etherController.getEtherPriceByTimestamp)

  app.use('/ether', router);
};

module.exports = { attachTo };

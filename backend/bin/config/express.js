const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const init = async (repository) => {
  const fiatFxController = require('../../routes/fiat-fx/fiat-fx-controller')(repository);

  const app = express();

  app.use(cors());

  // Logger
  app.use(morgan('dev', {
    skip: (req, res) => res.statusCode < 400,
  }));

  // static folder for testing
  // app.use('/static', express.static(path.join(__dirname, '..', '..', '..', 'client/build')));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  
  // Crons
  syncerService.createCronJob(fiatFxController.sync, { minute: 0 }); // sync every hour
  syncerService.createCronJob(etherController.sync, { minute: 10 }); // sync every hour

  // Routers
  require('./../../routes/syncer/sync-router').attachTo(app, repository);
  require('./../../routes/ether/ether-router').attachTo(app, repository);
  require('./../../routes/fiat-fx/fiat-fx-router').attachTo(app, repository);

  // Errors handlers
  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    next(createError(404));
  });
  app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    next();
  });

  return app;
};

module.exports = { init };

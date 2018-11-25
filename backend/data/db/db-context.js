/* globals __dirname */
const Sequelize = require('sequelize');
const path = require('path');
require('colors');

const createConnection = conf => new Sequelize(`postgres://${conf.user}:${conf.password}@${conf.host}:${conf.port}/${conf.name}`);

const init = databaseConfig => new Promise((resolve) => {
  const dbName = databaseConfig.name;
  const dbUser = databaseConfig.user;
  // const dbPass = databaseConfig.password;
  const testConnection = createConnection(databaseConfig);

  testConnection.query(`CREATE DATABASE ${dbName} WITH OWNER = ${dbUser}`)
    .then(() => {
      console.log('Database created.'.green);
    })
    .catch(() => {
      console.log('Database already exists.'.grey);
    }).then(() => {
      testConnection.close();
      const sequelize = createConnection(databaseConfig);
      const db = {};

      db.Ether = sequelize.import(path.join(__dirname, '/models/ether.js'));
      db.FiatFx = sequelize.import(path.join(__dirname, '/models/fiatFx.js'));
      db.Sequelize = Sequelize;
      db.sequelize = sequelize;
      // sync with 'force: true' will 'DROP TABLE IF EXISTS'
      db.sequelize.sync({
        force: false,
      });

      resolve(db);
    });
});

module.exports = {
  init,
};

// Basick BackEnd configs
module.exports = {
  api: {
    port: process.env.PORT || 3200,
  },
  database: {
    dbAddress: process.env.dockerMongoUrl || 'mongodb://admin:admin1234@ds063158.mlab.com:63158/node-react'
  },
};

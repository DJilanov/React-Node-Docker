module.exports = (sequelize, DataTypes) => sequelize.define('ether', {
  createdAt: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  priceUSD: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
}, {
  freezeTableName: true,
  tableName: 'etherHistory',
});

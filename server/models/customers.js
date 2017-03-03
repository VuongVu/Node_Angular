const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define('customers', {
    koushinbi: {
      type: DataTypes.DATE
    },
    kokyaku_id: {
      type: DataTypes.STRING(10)
    },
    kaisha: {
      type: DataTypes.STRING(30)
    },
    busho: {
      type: DataTypes.STRING(30)
    },
    namae: {
      type: DataTypes.STRING(30)
    },
    yakushoku: {
      type: DataTypes.STRING(30)
    },
    kyoten: {
      type: DataTypes.STRING(30)
    },
    meishi: {
      type: DataTypes.STRING(30)
    },
  }, {
    timestamps: false
  });

  return Customers;
};

// moment.utc().format('YYYY-MM-DD HH:MM:SS');
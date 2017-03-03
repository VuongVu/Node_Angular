module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    username: {
      type: DataTypes.STRING(255)
    },
    password: {
      type: DataTypes.STRING(255)
    },
    email: {
      type: DataTypes.STRING(255)
    }
  }, {
    timestamps: false
  });

  return Users;
};

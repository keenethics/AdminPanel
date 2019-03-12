const bcrypt = require('bcryptjs');
const nanoid = require('nanoid/async');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    refresh_token: DataTypes.STRING,
  }, {});
  User.associate = (models) => { // eslint-disable-line
    // associations can be defined here
  };

  User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(user.password, salt); // eslint-disable-line no-param-reassign
    user.refresh_token = await nanoid(); // eslint-disable-line no-param-reassign
  });

  User.prototype.comparePassword = function comparePassword(password) {
    return password === this.password;
  };

  return User;
};

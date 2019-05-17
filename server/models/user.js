const bcrypt = require('bcryptjs');
const nanoid = require('nanoid/async');
const omit = require('lodash/omit');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    refreshToken: DataTypes.STRING,
  }, {});
  User.associate = (models) => { // eslint-disable-line
    // associations can be defined here
  };

  User.privateFields = ['password', 'refreshToken'];

  User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(user.password, salt); // eslint-disable-line no-param-reassign
    user.refreshToken = await nanoid(); // eslint-disable-line no-param-reassign
  });

  User.prototype.comparePassword = function comparePassword(password) {
    return bcrypt.compare(password, this.password);
  };

  User.prototype.toJSON = function toJSON() {
    return omit(this.dataValues, User.privateFields);
  };

  return User;
};

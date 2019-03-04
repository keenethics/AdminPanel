process.env.NODE_ENV = 'test';
process.env.API_BASE = '/api';

const sequelize = require('sequelize');
const supertest = require('supertest');
const chai = require('chai');

const models = require('../models');
const express = require('..');

const request = supertest(express);
const { User } = models;
const { Op } = sequelize;

const defaultUser = {
  email: 'john.doe@example.com',
  password: '123321',
};

const createDefaultUser = () => User.create(defaultUser);
const getDefaultUser = () => defaultUser;

const cleanUsersExceptDefaultOne = async () => {
  const user = await getDefaultUser();

  return User.destroy({
    where: {
      email: { [Op.ne]: user.email },
    },
  });
};

const cleanUsers = () => User.destroy({
  where: {},
  truncate: true,
});

module.exports = {
  request,
  chai,

  getDefaultUser,
  createDefaultUser,
  cleanUsersExceptDefaultOne,
  cleanUsers,
};

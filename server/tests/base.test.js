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

const createDefaultUser = () => User.create(defaultUser, {
  attributes: { exclude: ['password', 'refresh_token'] },
});

const getDefaultUser = async () => {
  const user = await User.findOne({
    where: {
      email: defaultUser.email,
    },
  });

  if (!user) {
    await createDefaultUser();
    return getDefaultUser();
  }

  return user;
};

const loginWithDefaultUser = async () => {
  const user = await getDefaultUser();

  return request
    .post(`${process.env.API_BASE}/auth/login`)
    .send(user)
    .expect(201);
};

const cleanUsersExceptDefaultOne = async () => {
  const user = await getDefaultUser();

  return User.destroy({
    where: {
      email: { [Op.ne]: user.email },
    },
  });
};

module.exports = {
  request,
  chai,
  should: chai.should(),

  loginWithDefaultUser,
  cleanUsersExceptDefaultOne,
};

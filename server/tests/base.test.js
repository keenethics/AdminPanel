process.env.NODE_ENV = 'test';
process.env.API_BASE = '/api';

const supertest = require('supertest');
const chai = require('chai');

const models = require('../models');
const express = require('..');

const request = supertest(express);
const { User } = models;

const defaultUser = {
  email: 'john.doe@example.com',
  password: '123321',
};

const createDefaultUser = () => User.create(defaultUser);
const getDefaultUser = () => defaultUser;

// Clear data for all models
const truncate = () => Promise.all(
  Object.keys(models).map((key) => {
    if (['sequelize', 'Sequelize'].includes(key)) {
      return null;
    }

    return models[key].destroy({ where: {}, force: true });
  }),
);

module.exports = {
  request,
  chai,

  getDefaultUser,
  createDefaultUser,

  truncate,
};

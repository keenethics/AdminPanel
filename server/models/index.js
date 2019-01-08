const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const fromPairs = require('lodash/fromPairs');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/database.js`)[env]; // eslint-disable-line

const connectionParams = config.use_env_variable
  ? [process.env[config.use_env_variable]]
  : [config.database, config.username, config.password];

const sequelize = new Sequelize(...connectionParams, config);

const db = fromPairs(fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .map((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    return [model.name, model];
  }));

Object.values(db).filter(model => model.associate).forEach((model) => {
  model.associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

require('dotenv-safe').config(); // Required for sequelize-cli to load .env

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
    operatorsAliases: false,
  },
  test: {
    use_env_variable: 'TEST_DATABASE_URL',
    operatorsAliases: false,
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    operatorsAliases: false,
  },
};

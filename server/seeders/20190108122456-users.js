const { User } = require('../models');

module.exports = {
  up: () => User.bulkCreate([
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: '123321',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Jo Green',
      email: 'jo@green.com',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {
    validate: true,
    individualHooks: true,
  }),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};

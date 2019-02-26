module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [{
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: '123321',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};

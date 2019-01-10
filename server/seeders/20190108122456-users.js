module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [{
    name: 'John Doe',
    email: 'john.doe@example.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};

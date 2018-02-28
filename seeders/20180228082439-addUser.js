'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('User', [{
        FirstName: 'Herby',
        LastName: 'Herado',
        Age: 26,
        createdAt: new Date (),
        updatedAt: new Date ()
      },{
        FirstName: 'Fatimah',
        LastName: 'Azzahra',
        Age: 24,
        createdAt: new Date (),
        updatedAt: new Date ()
      },{
        FirstName: 'John',
        LastName: 'Doe',
        Age: 28,
        createdAt: new Date (),
        updatedAt: new Date ()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin@example.com",
        password: "123456",
        firstName: "Kiet",
        lastName: "Bui",
        address: "CAN THO",
        typeRole: "ROLE",
        gender: 1,
        keyRole: "R1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};

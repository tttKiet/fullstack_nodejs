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
        phonenumber: "0967688854",
        gender: 1,
        image: "",
        roleId: "R1",
        positionId: "P1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};

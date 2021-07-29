const Sequelize = require("sequelize");
const dbConfig = require("../../../config/database");

const ContactType = dbConfig.define("ContactTypes", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  deletionDate: {
    type: Sequelize.DATE,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
});

module.exports = ContactType;
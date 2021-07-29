const Sequelize = require("sequelize");
const dbConfig = require("../../../config/database");

const UsageType = dbConfig.define("UsageTypes", {
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

module.exports = UsageType;
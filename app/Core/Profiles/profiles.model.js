const Sequelize = require("sequelize");
const dbConfig = require("../../../config/database");

const Profile = dbConfig.define("Profiles", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  read: {
    type: Sequelize.STRING,
  },
  create: {
    type: Sequelize.STRING,
  },
  update: {
    type: Sequelize.STRING,
  },
  delete: {
    type: Sequelize.STRING,
  },
  erase: {
    type: Sequelize.STRING,
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

module.exports = Profile;

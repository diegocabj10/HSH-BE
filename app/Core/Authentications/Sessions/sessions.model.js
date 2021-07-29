const Sequelize = require("sequelize");
const dbConfig = require("../../../../config/database");
const usersModel = require("../../../Features/Users/users.model");

const Session = dbConfig.define("Sessions", {
  refreshToken: {
    type: Sequelize.TEXT('long'),
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

Session.belongsTo(usersModel, { foreignKey: { name: 'userId', allowNull: false } });

module.exports = Session;

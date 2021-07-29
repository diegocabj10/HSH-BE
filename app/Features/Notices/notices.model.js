const Sequelize = require("sequelize");
const dbConfig = require("../../../config/database");
const usersModel = require("../Users/users.model");
const deviceModel = require("../../Core/Devices/devices.model");

const Notice = dbConfig.define("Notices", {
  title: {
    type: Sequelize.STRING,
  },
  message: {
    type: Sequelize.STRING,
  },
  readDate: {
    type: Sequelize.DATE,

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

Notice.belongsTo(usersModel, { foreignKey: { name: 'noticerUserId', allowNull: true } });
Notice.belongsTo(deviceModel, { foreignKey: { name: 'deviceId', allowNull: false } });

module.exports = Notice;

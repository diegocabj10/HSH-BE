const Sequelize = require('sequelize');
const dbConfig = require("../../../config/database");
const usersModel = require('../Users/users.model');
const eventsModel = require('../Events/events.model');
const devicesModel = require('../../Core/Devices/devices.model');

const Notification = dbConfig.define('Notifications', {
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

Notification.belongsTo(eventsModel, { foreignKey: { name: 'eventId', allowNull: false } });
Notification.belongsTo(usersModel, { foreignKey: { name: 'userId', allowNull: false } });

module.exports = Notification;

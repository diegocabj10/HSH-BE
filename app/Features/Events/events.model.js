const Sequelize = require("sequelize");
const dbConfig = require("../../../config/database");
const signalModel = require("../../Core/Signals/signals.model");
const deviceModel = require("../../Core/Devices/devices.model");

const Event = dbConfig.define("Events", {
  value: {
    type: Sequelize.INTEGER,
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

Event.belongsTo(signalModel, { foreignKey: { name: 'signalId', allowNull: false } });
Event.belongsTo(deviceModel, { foreignKey: { name: 'deviceId', allowNull: false } });

module.exports = Event;

const Sequelize = require("sequelize");
const dbConfig = require("../../../config/database");
const userProfileDeviceModel = require("../../Core/MyDevices/userProfileDevice.model");
const signalModel = require("../../Core/Signals/signals.model");

const userNotificationSetting = dbConfig.define("UserNotificationsSettings", {
  status: {
    type: Sequelize.INTEGER,
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

userNotificationSetting.belongsTo(signalModel, { foreignKey: { name: 'signalId', allowNull: false } });
userNotificationSetting.belongsTo(userProfileDeviceModel, { foreignKey: { name: 'userProfileDeviceId', allowNull: false } });

module.exports = userNotificationSetting;

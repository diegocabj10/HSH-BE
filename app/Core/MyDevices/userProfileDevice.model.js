const Sequelize = require("sequelize");
const dbConfig = require("../../../config/database");
const devicesModel = require("../Devices/devices.model");
const usersModel = require("../../Features/Users/users.model");
const profilesModel = require("../Profiles/profiles.model");

const UserProfileForDevice = dbConfig.define("UsersProfilesDevices", {
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

UserProfileForDevice.belongsTo(devicesModel, { foreignKey: { name: 'deviceId', allowNull: false } });
UserProfileForDevice.belongsTo(usersModel, { foreignKey: { name: 'userId', allowNull: false } });
UserProfileForDevice.belongsTo(profilesModel, { foreignKey: { name: 'profileId', allowNull: false } });

module.exports = UserProfileForDevice;

const Sequelize = require("sequelize");
const dbConfig = require("../../../config/database");
const UsageTypesModel = require("../UsageTypes/usageTypes.model");

const Device = dbConfig.define("Devices", {
  name: {
    type: Sequelize.STRING,
  },
  serialNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pin: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lastConnection: {
    type: Sequelize.DATE,
  },
  status: {
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

Device.belongsTo(UsageTypesModel, { foreignKey: { name: 'usageTypeId', allowNull: false } });

module.exports = Device;

const Sequelize = require('sequelize');
const dbConfig = require("../../../config/database");
const usersModel = require('../Users/users.model');
const deviceModel = require("../../Core/Devices/devices.model");

const Claim = dbConfig.define('Claims', {
    title: {
        type: Sequelize.STRING
    },
    message: {
        type: Sequelize.STRING
    },
    response: {
        type: Sequelize.STRING
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

Claim.belongsTo(usersModel, { foreignKey: { name: 'claimantUserId', allowNull: false } });
Claim.belongsTo(usersModel, { foreignKey: { name: 'respondentUserId', allowNull: true } });
Claim.belongsTo(deviceModel, { foreignKey: { name: 'deviceId', allowNull: false } });

module.exports = Claim;
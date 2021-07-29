const Sequelize = require('sequelize');
const dbConfig = require('../../../config/database');
const signalModel = require('../Signals/signals.model');

const NotificationSetting = dbConfig.define('NotificationsSettings', {
    valueFrom: {
        type: Sequelize.INTEGER
    },
    valueTo: {
        type: Sequelize.INTEGER
    },
    title: {
        type: Sequelize.STRING
    },
    message: {
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
    }
});

NotificationSetting.belongsTo(signalModel, { foreignKey: { name: 'signalId', allowNull: false } });

module.exports = NotificationSetting;

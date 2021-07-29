const userNotificationSettingModel = require("./userNotificationsSettings.model");
const { signals, userNotificationStatus } = require('../../../config/enums');

exports.getUserNotificationSetting = async (userProfileDeviceId, signalId) => {
    const userDevice = await userNotificationSettingModel.findOne({
        raw: true,
        where: { userProfileDeviceId, signalId },
    });
    return userDevice;
};

exports.enabledAllUserNotifications = async (userProfileDeviceId) => {
    try {
        const enableNotificationOfOnlineSignal = await userNotificationSettingModel.bulkCreate([
            {
                userProfileDeviceId,
                signalId: signals.ONLINE,
                status: userNotificationStatus.ON
            },
            {
                userProfileDeviceId,
                signalId: signals.OPEN_CLOSE_APERTURE,
                status: userNotificationStatus.ON
            },
            {
                userProfileDeviceId,
                signalId: signals.CARBON_MONOXIDE,
                status: userNotificationStatus.ON
            }
        ]);
    } catch (err) {
        throw Error(err.message);
    }

}



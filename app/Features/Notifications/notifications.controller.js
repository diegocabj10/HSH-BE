const notificationModel = require("./notifications.model");
const { getPagination, getPagingData } = require("../../Shared/pagination");
const dbConfig = require("../../../config/database");
const Op = dbConfig.Sequelize.Op;
const notificationSettingController = require("../../Core/NotificationsSettings/notificationsSettings.controller");
const devicesModel = require("../../Core/Devices/devices.model");
const eventsModel = require("../Events/events.model");
const myDevicesController = require("../../Core/MyDevices/mydevices.controller");
const userNotificationSettingController = require("../UserNotificationsSettings/userNotificationsSettings.controller");

const { userNotificationStatus } = require("../../../config/enums");

// Retrieve all Notifications from the database.
exports.findAll = async (req, res) => {
  const { page, size, title } = req.query;
  let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  condition = { ...condition, userId: req.body.userId };
  condition = { ...condition, deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } } };
  try {
    const { limit, offset } = getPagination(page, size);
    const data = await notificationModel.findAndCountAll({
      where: condition,
      limit,
      offset,
      include: [{
        model: eventsModel, attributes: ['id', 'value'],
        include: [{ model: devicesModel, attributes: ['id', 'name'] }],
      }],
      order: [['createdAt', 'DESC']],
    });
    const response = getPagingData(data, page, limit);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Find a single Notification with an id
exports.findOne = async (req, res) => {
  try {
    const notification = await notificationModel.findByPk(req.params.id);
    res.send(notification);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Delete a device with the specified id in the request
exports.delete = async (req, res) => {
  try {
    const [data] = await notificationModel.destroy({
      where: { id: req.params.id },
    });
    res.send(data ? 'Registro eliminado' : 'No se pudo eliminar el registro');
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//Patch a notification to expire it with deletionDate
exports.expire = async (req, res) => {
  try {
    const notificationUpdated = await notificationModel.update(
      {
        deletionDate: new Date(),
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send(notificationUpdated);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.createNotification = async ({ id: eventId, signalId, deviceId, value }) => {
  const NotificationSetting = await notificationSettingController.existsNotificationSettingForSignal(signalId, value);
  if (!NotificationSetting) {
    return;
  }
  let { title, message } = NotificationSetting;

  let usersAndProfilesOfThatDevice = await myDevicesController.findAllUsersAndProfilesFromDeviceId(deviceId);

  usersAndProfilesOfThatDevice.map(async (userAndProfile) => {
    let userNotificationSetting = await userNotificationSettingController.getUserNotificationSetting(userAndProfile.id, signalId)
    if (userNotificationSetting.status === userNotificationStatus.ON) {
      await create(eventId, title, message, userAndProfile.userId);
    }
  });
};

// Create and Save a new Notification
const create = async (eventId, title, message, userId, deviceId) => {
  try {
    const newNotification = await notificationModel.create({
      readDate: null,
      userId,
      eventId,
      title,
      message
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//Counts all active notifications
exports.countAll = async (req, res) => {
  try {
    const totalItems = await notificationModel.count({
      where: {
        userId: req.body.userId,
        deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } }
      }
    });
    return totalItems;
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

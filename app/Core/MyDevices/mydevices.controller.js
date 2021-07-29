const { profiles, usageType } = require('../../../config/enums');
const deviceController = require("../Devices/devices.controller")
const userNotificationsSettingsController = require("../../Features/UserNotificationsSettings/userNotificationsSettings.controller");
const userModel = require("../../Features/Users/users.model");
const userProfileDeviceModel = require("./userProfileDevice.model");
const deviceModel = require("../Devices/devices.model");
const profileModel = require("../Profiles/profiles.model");
const usageModel = require("../UsageTypes/usageTypes.model");

const { getPagination, getPagingData } = require("../../Shared/pagination");
const dbConfig = require("../../../config/database");
const Op = dbConfig.Sequelize.Op;
const Sequelize = dbConfig.Sequelize;

exports.addOwner = async (req, res) => {
  try {

    const existingDevice = await deviceController.validateDeviceExistBySerialNumberAndPin(req, res);

    let profileId = getProfileIdByUsageTypeId(existingDevice.usageTypeId);

    let [newUserProfileDevice, userProfileDeviceCreated] = await userProfileDeviceModel.findOrCreate({
      defaults: {
        profileId: profileId,
        deviceId: existingDevice.id,
        userId: req.body.userId
      },
      where: {
        profileId: profileId,
        deviceId: existingDevice.id,
        userId: req.body.userId
      }
    });

    if (userProfileDeviceCreated) {
      userNotificationsSettingsController.enabledAllUserNotifications(newUserProfileDevice.id);
    } else {
      res.status(400);
      throw new Error('El dispositivo ya esta registrado');
    }

    res.send(newUserProfileDevice);
  } catch (err) {
    res.status(res.statusCode || 500);
    res.send({ message: err.message });
  }
};

// Retrieve all mydevices from the database.
exports.findAll = async (req, res) => {
  try {
    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);
    const data = await userProfileDeviceModel.findAndCountAll({
      where: {
        profileId: { [Op.or]: [profiles.APARTMENT_OWNER, profiles.BUILDING_OWNER] },
        userId: req.body.userId,
        deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } }
      },
      include: [{
        model: deviceModel,
        where: { deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } } },
        attributes: ['id', 'name', 'serialNumber', 'status']
      },
      {
        model: profileModel,
        where: { deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } } },
        attributes: ['id', 'name']
      }],
      order: [[Sequelize.col('Device.name')]],
      limit,
      offset,
    });
    const response = getPagingData(data, page, limit);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//Retrieve all mydevices without pagination and named in a specific format
exports.findList = async (req, res) => {
  try {
    const data = await userProfileDeviceModel.findAll({
      where: {
        profileId: { [Op.or]: [profiles.APARTMENT_OWNER, profiles.BUILDING_OWNER] },
        userId: req.body.userId,
        deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } }
      },
      attributes: [['deviceId', 'key'], ['deviceId', 'value'], [Sequelize.col('Device.name'), 'label'],],
      include: [{
        model: deviceModel,
        where: { deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } } },
        attributes: []
      },
      {
        model: profileModel,
        where: { deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } } },
        attributes: []
      }],
      distinct: true,
      order: [[Sequelize.col('Device.name')]],
    });
    res.send(data);
  }
  catch (err) {
    res.status(500).send(err.message);
  }
};

// Find a single mydevice with an id
exports.findOne = async (req, res) => {
  try {
    const data = await userProfileDeviceModel.findOne({
      where: { id: req.params.id },
      include: [{
        model: deviceModel, include: [{ model: usageModel, attributes: ['name'] }],
        attributes: ['name', 'serialNumber', 'status']
      },
      { model: profileModel, attributes: ['name'] }],
    });
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//Patch a userProfileDevice to expire it with deletionDate
exports.expire = async (req, res) => {
  try {
    const [mydeviceUpdated] = await userProfileDeviceModel.update(
      {
        deletionDate: new Date(),
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send(mydeviceUpdated ? 'Información modificada' : 'No se pudo modificar la información');
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//Counts all active mydevices
exports.countAll = async (req, res) => {
  try {
    const totalItems = await userProfileDeviceModel.count({
      where: {
        userId: req.body.userId,
        deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } }
      },
      include: [{
        model: profileModel,
        where: { deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } } },
        attributes: []
      },
      {
        model: deviceModel,
        where: { deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } } },
        attributes: []
      }],
    });
    return totalItems;
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Update a device by the id in the request
exports.rename = async (req, res) => {
  try {
    // Rename device in the database
    const [deviceUpdated] = await deviceModel.update(
      {
        name: req.body.name,
      },
      { where: { id: req.params.id } }
    );
    res.send(deviceUpdated ? 'Información modificada' : 'No se pudo modificar la información');
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.findAllUsersAndProfilesFromDeviceId = async (deviceId) => {
  const usersAndProfilesOfThatDevice = await userProfileDeviceModel.findAll({
    where: { deviceId },
    raw: true,
    attributes: ['id', 'deviceId', 'userId', 'profileId', 'createdAt', 'updatedAt', 'deletionDate'],
    include: [
      { model: deviceModel, attributes: ['id', 'name'] },
      { model: profileModel, attributes: ['id', 'name'] },
      { model: userModel, attributes: ['id', 'name', 'lastName'] },
    ]
  });
  return usersAndProfilesOfThatDevice;
};


const getProfileIdByUsageTypeId = (usageTypeId) => {
  return usageTypeId == usageType.APARTMENT ?
    profiles.APARTMENT_OWNER :
    profiles.BUILDING_OWNER;
}

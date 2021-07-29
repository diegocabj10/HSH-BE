const { contactType, profiles, usageType } = require('../../../config/enums');
const userController = require('../../Features/Users/users.controller');
const deviceController = require("../Devices/devices.controller");
const userNotificationsSettingsController = require("../../Features/UserNotificationsSettings/userNotificationsSettings.controller");
const userProfileDeviceModel = require("../MyDevices/userProfileDevice.model");
const userModel = require("../../Features/Users/users.model");
const profileModel = require("../Profiles/profiles.model");
const deviceModel = require("../Devices/devices.model");
const { getPagination, getPagingData } = require("../../Shared/pagination");
const dbConfig = require("../../../config/database");
const Op = dbConfig.Sequelize.Op;
const Sequelize = dbConfig.Sequelize;


exports.addContact = async (req, res) => {

  try {
    const existingDevice = await deviceController.validateDeviceExistByDeviceId(req, res);

    let profileId = await getProfileIdByContactTypeIdAndUsageTypeId(req.body.contactTypeId, existingDevice.usageTypeId);

    let userId = await userController.findOrCreateUser(req, res);

    let [newUserProfileDevice, userProfileDeviceCreated] = await userProfileDeviceModel.findOrCreate({
      defaults: {
        deviceId: existingDevice.id,
        profileId,
        userId
      },
      where: {
        deviceId: existingDevice.id,
        profileId,
        userId
      }
    });

    if (userProfileDeviceCreated) {
      userNotificationsSettingsController.enabledAllUserNotifications(newUserProfileDevice.id);
    } else {
      res.status(400);
      throw new Error('El contacto ya existe para el dispositivo.');
    }

    res.send(newUserProfileDevice);
  } catch (err) {
    res.status(res.statusCode || 500);
    res.send({ message: err.message });
  }
};


const getProfileIdByContactTypeIdAndUsageTypeId = async (contactTypeId, usageTypeId) => {
  return usageTypeId == usageType.APARTMENT ?
    contactTypeId == contactType.ADMIN ?
      profiles.APARTMENT_ADMIN
      : profiles.APARTMENT_CONTACT
    : contactTypeId == contactType.ADMIN ?
      profiles.BUILDING_ADMIN
      : profiles.BUILDING_CONTACT;
}

// Retrieve all Contacts from the database.
exports.findAll = async (req, res) => {
  const { page, size, deviceId, email, name, lastName } = req.query;
  let condition = { userId: { [Op.not]: req.body.userId } };
  condition = { ...condition, deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } } };
  let userCondition = email ? { email: { [Op.like]: `%${email}%` } } : null;
  if (name) { userCondition = { ...userCondition, name: { [Op.like]: `%${name}%` } }; }
  if (lastName) { userCondition = { ...userCondition, lastName: { [Op.like]: `%${lastName}%` } }; }
  userCondition = { ...userCondition, deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } } };
  let profileCondition = { deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } } };
  let deviceCondition = { deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } } };

  const { limit, offset } = getPagination(page, size);

  try {
    const { limit, offset } = getPagination(page, size);
    const data = await userProfileDeviceModel.findAndCountAll({
      where: {
        ...condition,
        deviceId: {
          [Op.in]: [
            Sequelize.literal('Select deviceId From UsersProfilesDevices Where userId = ' + req.body.userId +
              ' and deviceId = ' + deviceId)
          ]
        }
      },
      include: [{
        model: userModel,
        where: userCondition,
        attributes: ['name', 'lastName', 'email']
      },
      {
        model: profileModel,
        where: profileCondition,
        attributes: ['name']
      },
      {
        model: deviceModel,
        where: deviceCondition,
        attributes: ['name']
      }],
      order: [[Sequelize.col('User.name')]],
      limit,
      offset,
    });
    const response = getPagingData(data, page, limit);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//Counts all active contacts
exports.countAll = async (req, res) => {
  try {
    const totalItems = await userProfileDeviceModel.count({
      where: {
        userId: { [Op.not]: req.body.userId },
        deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } },
        deviceId: {
          [Op.in]: [
            Sequelize.literal('Select deviceId From UsersProfilesDevices Where userId = ' + req.body.userId +
              ' And (deletionDate is null Or deletionDate >= now())')
          ]
        }
      },
      include: [{
        model: userModel,
        where: { deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } } },
        attributes: []
      },
      {
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

// Find a single contact with an id
exports.findOne = async (req, res) => {
  try {
    const data = await userProfileDeviceModel.findOne({
      where: { id: req.params.id },
      include: [{ model: deviceModel, attributes: ['name'] },
      { model: profileModel, attributes: ['name'] },
      { model: userModel, attributes: ['name', 'lastName', 'email', 'phone'] }],
    });
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Patch a userProfileDeviceModel by the id in the request
exports.patch = async (req, res) => {
  try {
    const contactPatched = await userProfileDeviceModel.update(
      {
        deviceId: req.body.deviceId,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send(contactPatched);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

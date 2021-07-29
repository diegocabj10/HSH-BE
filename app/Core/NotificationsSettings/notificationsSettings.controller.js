const dbConfig = require("../../../config/database");
const Op = dbConfig.Sequelize.Op;
const notificationSettingModel = require("./notificationsSettings.model");
const signalModel = require("../Signals/signals.model");
const { getPagination, getPagingData } = require("../../Shared/pagination");
const { statusDevice } = require("../../../config/enums");

// Retrieve all notifications settings from the database.
exports.findAll = async (req, res) => {
  const { page, size, title, message } = req.query;
  let condition = title
    ? { title: { [Op.like]: `%${title}%` } }
    : null;
  if(message){
    condition = {...condition, message: { [Op.like]: `%${message}%` } }
  }
  condition = {
    ...condition,
    deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } }
  };
  try {
    const { limit, offset } = getPagination(page, size);
    const data = await notificationSettingModel.findAndCountAll({
      where: condition,
      limit,
      offset,
      attributes: ['id', 'valueFrom', 'valueTo', 'title', 'message', 'createdAt', 'updatedAt', 'deletionDate'],
      include: { model: signalModel, attributes: ['id', 'name'] }
    });
    const response = getPagingData(data, page, limit);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Find a single notification setting with an id
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await notificationSettingModel.findByPk(id, {
      attributes: ['id', 'valueFrom', 'valueTo', 'title', 'message', 'createdAt', 'updatedAt', 'deletionDate'],
      include: { model: signalModel, attributes: ['id', 'name'] }
    });
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    // Create and save a notification setting
    const newNotificationSetting = await notificationSettingModel.create({
      signalId: req.body.signalId,
      valueFrom: req.body.valueFrom,
      valueTo: req.body.valueTo,
      title: req.body.title,
      message: req.body.message
    });
    res.send(newNotificationSetting);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update a notification setting by the id in the request
exports.put = async (req, res) => {
  try {
    const notificationSettingUpdated = await notificationSettingModel.update(
      {
        signalId: req.body.signalId,
        valueFrom: req.body.valueFrom,
        valueTo: req.body.valueTo,
        title: req.body.title,
        message: req.body.message
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send(notificationSettingUpdated ? 'Información modificada' : 'No se pudo modificar la información');
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Delete a notificationSetting with the specified id in the request
exports.delete = async (req, res) => {
  try {
    const data = await notificationSettingModel.destroy({
      where: { id: req.params.id },
    });
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//Patch a notification setting to expire it with deletionDate
exports.expire = async (req, res) => {
  try {
    const notificationSettingUpdated = await notificationSettingModel.update(
      {
        deletionDate: new Date(),
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send(notificationSettingUpdated ? 'Información modificada' : 'No se pudo modificar la información');
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.existsNotificationSettingForSignal = async (signalId, value) => {
  const valuesFromAndTo = await findValuesFromAndTo(signalId);
  return valuesFromAndTo.find((valueFromAndTo) => {
    return valueFromAndTo.valueFrom <= value && value <= valueFromAndTo.valueTo;
  });
};

const findValuesFromAndTo = async (signalId) => {
  const valuesFromAndTo = await notificationSettingModel.findAll({
    raw: true,
    where: { signalId: signalId },
  });
  return valuesFromAndTo;
};

//Counts all active notificationSettings
exports.countAll = async (req, res) => {
  try {
    const totalItems = await notificationSettingModel.count({
      where: {
        deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } }
      }
    });
    return totalItems;
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const dbConfig = require("../../../config/database");
const Op = dbConfig.Sequelize.Op;
const deviceModel = require("./devices.model");
const usageTypesModel = require("../UsageTypes/usageTypes.model");
const { getPagination, getPagingData } = require("../../Shared/pagination");
const { statusDevice } = require("../../../config/enums");

// Retrieve all devices from the database.
exports.findAll = async (req, res) => {
  const { page, size, serialNumber } = req.query;
  let condition = serialNumber
    ? { serialNumber: { [Op.like]: `%${serialNumber}%` } }
    : null;
  condition = {
    ...condition,
    deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } }
  };
  try {
    const { limit, offset } = getPagination(page, size);
    const data = await deviceModel.findAndCountAll({
      where: condition,
      limit,
      offset,
      attributes: ['id', 'serialNumber', 'pin', 'name', 'createdAt', 'updatedAt', 'deletionDate', 'lastConnection', 'status'],
      include: { model: usageTypesModel, attributes: ['id', 'name'] }
    });
    const response = getPagingData(data, page, limit);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Find a single device with an id
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await deviceModel.findByPk(id, {
      attributes: ['id', 'serialNumber', 'pin', 'name', 'createdAt', 'updatedAt', 'deletionDate', 'lastConnection', 'status'],
      include: { model: usageTypesModel, attributes: ['id', 'name'] }
    });
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Create and Save a new device
exports.create = async (req, res) => {
  try {
    const generatedPin = Math.round(Math.random() * (9999) + 1);
    // Create and save a device
    const newDevice = await deviceModel.create({
      name: req.body.serialNumber,
      serialNumber: req.body.serialNumber,
      usageTypeId: req.body.usageTypeId,
      pin: generatedPin,
      status: statusDevice.OFFLINE
    });
    res.send(newDevice);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update a device by the id in the request
exports.update = async (req, res) => {
  try {
    // Update device in the database
    const [deviceUpdated] = await deviceModel.update(
      {
        serialNumber: req.body.serialNumber,
        usageTypeId: req.body.usageTypeId,
      },
      { where: { id: req.params.id } }
    );
    res.send(deviceUpdated ? 'Información modificada' : 'No se pudo modificar la información');
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Delete a device with the specified id in the request
exports.delete = async (req, res) => {
  try {
    const [data] = await deviceModel.destroy({
      where: { id: req.params.id },
    });
    res.send(data ? 'Registro eliminado' : 'No se pudo eliminar el registro');
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//Patch a device to expire it with deletionDate
exports.expire = async (req, res) => {
  try {
    const [deviceUpdated] = await deviceModel.update(
      {
        deletionDate: new Date(),
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send(deviceUpdated ? 'Información modificada' : 'No se pudo modificar la información');
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.findIdAndPreviousStatusDeviceBySerialNumber = async (serialNumber) => {
  const device = await deviceModel.findOne({
    raw: true,
    where: { serialNumber },
  });
  return device;
};

exports.modifyDeviceStatusAndLastConnection = async (deviceId, newStatus) => {
  try {
    const deviceUpdated = await deviceModel.update(
      {
        lastConnection: new Date(),
        status: newStatus
      },
      {
        where: { id: deviceId },
      }
    );
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.validateDeviceExistBySerialNumberAndPin = async (req, res) => {
  try {
    const { serialNumber, pin } = req.body;
    const deviceExist = await deviceModel.findOne({
      where: { serialNumber, pin },
      attributes: ['id', 'name', 'serialNumber', 'usageTypeId'],
      include: { model: usageTypesModel, attributes: ['id', 'name'] }
    });
    return deviceExist.toJSON();
  } catch (err) {
    res.status(404);
    throw new Error('Dispositivo no encontrado');
  }
};

exports.validateDeviceExistByDeviceId = async (req, res) => {
  try {
    const { deviceId } = req.body;
    const data = await deviceModel.findByPk(deviceId, {
      attributes: ['id', 'serialNumber', 'name', 'createdAt', 'updatedAt', 'deletionDate', 'lastConnection', 'status', 'usageTypeId'],
      include: { model: usageTypesModel, attributes: ['id', 'name'] }
    });
    return data.toJSON();
  } catch (err) {
    res.status(404);
    throw new Error('Dispositivo no encontrado');
  }
};

//Counts all active devices
exports.countAll = async (req, res) => {
  try {
    const totalItems = await deviceModel.count({
      where: {
        deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } }
      }
    });
    return totalItems;
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

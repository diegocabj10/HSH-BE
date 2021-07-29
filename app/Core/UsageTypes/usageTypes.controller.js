const dbConfig = require("../../../config/database");
const usageTypeModel = require("./usageTypes.model");
const { getPagination, getPagingData } = require("../../Shared/pagination");
const Op = dbConfig.Sequelize.Op;


// Retrieve all usageTypes from the database.
exports.findAll = async (req, res) => {
  const { page, size, name } = req.query;
  let condition = name
    ? { name: { [Op.like]: `%${name}%` } }
    : null;
  condition = {
    ...condition,
    deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } }
  };
  try {
    const { limit, offset } = getPagination(page, size);
    const data = await usageTypeModel.findAndCountAll({
      where: condition,
      limit,
      offset,
      attributes: ['id', 'name', 'createdAt', 'updatedAt', 'deletionDate'],
    });
    const response = getPagingData(data, page, limit);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//Retrieve all usageTypes without pagination and named in a specific format
exports.findList = async (req, res) => {
  try{
    const data = await usageTypeModel.findAll({
      where: {deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } }},
      attributes: [['id','key'],['id','value'], ['name','label']],
      order: [['name']],
    });
    res.send(data);
  }
  catch (err) {
    res.status(500).send(err.message);
  }
};

// Find a single usageType with an id
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await usageTypeModel.findByPk(id, {
      attributes: ['id', 'name', 'createdAt', 'updatedAt', 'deletionDate'],
    });
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Create and save a usageType
exports.create = async (req, res) => {
  try {
    const newUsageType = await usageTypeModel.create({
      name: req.body.name,
    });
    res.send(newUsageType);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
// Update a usageType by the id in the request
exports.update = async (req, res) => {
  try {
    const [usageTypeUpdated] = await usageTypeModel.update(
      {
        name: req.body.name,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send(usageTypeUpdated ? 'Información modificada' : 'No se pudo modificar la información');
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};


// Delete a usageType with the specified id in the request
exports.delete = async (req, res) => {
  try {
    const [data] = await usageTypeModel.destroy({
      where: { id: req.params.id },
    });
    res.send(data ? 'Registro eliminado' : 'No se pudo eliminar el registro');
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//Patch a usageType to expire it with deletionDate
exports.expire = async (req, res) => {
  try {
    const [usageTypeUpdated] = await usageTypeModel.update(
      {
        deletionDate: new Date(),
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send(usageTypeUpdated ? 'Información modificada' : 'No se pudo modificar la información');
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//Counts all active usageTypes
exports.countAll = async (req, res) => {
  try {
    const totalItems = await usageTypeModel.count({
      where: {
        deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } }
      }
    });
    return totalItems;
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

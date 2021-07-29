const dbConfig = require("../../../config/database");
const contactTypeModel = require("./contactTypes.model");
const { getPagination, getPagingData } = require("../../Shared/pagination");
const Op = dbConfig.Sequelize.Op;


// Retrieve all contactTypes from the database.
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
    const data = await contactTypeModel.findAndCountAll({
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

//Retrieve all contactTypes without pagination and named in a specific format
exports.findList = async (req, res) => {
  try{
    const data = await contactTypeModel.findAll({
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

// Find a single contactType with an id
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await contactTypeModel.findByPk(id, {
      attributes: ['id', 'name', 'createdAt', 'updatedAt', 'deletionDate'],
    });
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Create and save a contactType
exports.create = async (req, res) => {
  try {
    const newContactType = await contactTypeModel.create({
      name: req.body.name,
    });
    res.send(newContactType);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
// Update a contactType by the id in the request
exports.update = async (req, res) => {
  try {
    const [contactTypeUpdated] = await contactTypeModel.update(
      {
        name: req.body.name,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send(contactTypeUpdated ? 'Información modificada' : 'No se pudo modificar la información');
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};


// Delete a contactType with the specified id in the request
exports.delete = async (req, res) => {
  try {
    const [data] = await contactTypeModel.destroy({
      where: { id: req.params.id },
    });
    res.send(data ? 'Registro eliminado' : 'No se pudo eliminar el registro');
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//Patch a contactType to expire it with deletionDate
exports.expire = async (req, res) => {
  try {
    const [contactTypeUpdated] = await contactTypeModel.update(
      {
        deletionDate: new Date(),
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send(contactTypeUpdated ? 'Información modificada' : 'No se pudo modificar la información');
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//Counts all active contactTypes
exports.countAll = async (req, res) => {
  try {
    const totalItems = await contactTypeModel.count({
      where: {
        deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } }
      }
    });
    return totalItems;
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

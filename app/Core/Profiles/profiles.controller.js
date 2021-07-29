const dbConfig = require("../../../config/database");
const profileModel = require("./profiles.model");
const { getPagination, getPagingData } = require("../../Shared/pagination");
const Op = dbConfig.Sequelize.Op;

// Retrieve all profiles from the database.
exports.findAll = async (req, res) => {
    const { page, size, name } = req.query;
    let condition = name
        ? { name: { [Op.like]: `%${name}%` } }
        : null;
    try {
        const { limit, offset } = getPagination(page, size);
        const data = await profileModel.findAndCountAll({
            where: condition,
            limit,
            offset,
        });
        const response = getPagingData(data, page, limit);
        res.send(response);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Find a single profile with an id
exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await profileModel.findByPk(id, {});
        res.send(data);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

// Create and save a profile
exports.create = async (req, res) => {
    try {
        const newProfile = await profileModel.create({
            name: req.body.name,
            read: req.body.read,
            create: req.body.create,
            update: req.body.update,
            delete: req.body.delete,
            erase: req.body.erase,
        });
        res.send(newProfile);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Update a profile by the id in the request
exports.update = async (req, res) => {
    try {
        const profileUpdated = await profileModel.update(
            {
                name: req.body.name,
                read: req.body.read,
                create: req.body.create,
                update: req.body.update,
                delete: req.body.delete,
                erase: req.body.erase,
            },
            {
                where: { id: req.params.id },
            }
        );
        res.send(profileUpdated ? 'Información modificada' : 'No se pudo modificar la información');
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

// Delete a profile with the specified id in the request
exports.delete = async (req, res) => {
    try {
        const data = await profileModel.destroy({
            where: { id: req.params.id },
        });
        res.send(data ? 'Registro eliminado' : 'No se pudo eliminar el registro');
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

//Patch a profile to expire it with deletionDate
exports.expire = async (req, res) => {
    try {
        const profileUpdated = await profileModel.update(
            {
                deletionDate: new Date(),
            },
            {
                where: { id: req.params.id },
            }
        );
        res.send(profileUpdated ? 'Información modificada' : 'No se pudo modificar la información');
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

//Counts all active profiles
exports.countAll = async (req, res) => {
  try {
    const totalItems = await profileModel.count({
      where: {
        deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } }
      }
    });
    return totalItems;
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

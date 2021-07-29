const dbConfig = require("../../../config/database");
const userModel = require("./users.model");
const { getPagination, getPagingData } = require("../../Shared/pagination");
const Op = dbConfig.Sequelize.Op;

// Create and Save a new user
exports.create = async (req, res) => {
  try {
    // Create and save a user
    const newUser = await userModel.create({
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      name: req.body.name,
      lastName: req.body.lastName,
    });
    res.send(newUser);
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(400);
      err.message = 'Oops, parece que ya existe un usuario con este email, por favor trata de iniciar sesión.';
    }
    res.status(res.statusCode || 500);
    res.send({ message: err.message });
  }
};

// Retrieve all Users from the database.
exports.findAll = async (req, res) => {
  const { page, size, email, name, lastName } = req.query;
  let condition = email ? { email: { [Op.like]: `%${email}%` } } : null;
  if (name) { condition = { ...condition, name: { [Op.like]: `%${name}%` } }; }
  if (lastName) { condition = { ...condition, lastName: { [Op.like]: `%${lastName}%` } }; }
  condition = { ...condition, deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } } };

  const { limit, offset } = getPagination(page, size);
  try {
    const { limit, offset } = getPagination(page, size);
    const data = await userModel.findAndCountAll({
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

// Find a single User with an id
exports.findOne = async (req, res) => {
  try {
    const data = await userModel.findByPk(req.params.id);
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Update a User by the id in the request
exports.update = async (req, res) => {
  try {
    const userUpdated = await userModel.update(
      {
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        name: req.body.name,
        lastName: req.body.lastName,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send(userUpdated);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Patch a user by the id in the request
exports.patch = async (req, res) => {
  try {
    const userPatched = await userModel.update(
      {
        password: req.body.password,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send(userPatched);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Delete a User with the specified id in the request
exports.delete = async (req, res) => {
  try {
    const data = await userModel.destroy({
      where: { id: req.params.id },
    });
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//Patch a user to expire it with deletionDate
exports.expire = async (req, res) => {
  try {
    const userPatched = await userModel.update(
      {
        deletionDate: new Date(),
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send(userPatched);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.validateUserCredentials = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await userModel.findOne({
      where: { email, password },
      attributes: ['id', 'email', 'name', 'lastName'],
    });
    return { userLogged: userExist.toJSON() };
  } catch (err) {
    res.status(401);
    throw new Error('Usuario no encontrado');
  }
};

exports.findOrCreateUser = async (req, res) => {
  try {
    let [user, userCreated] = await userModel.findOrCreate({
      defaults: {
        email: req.body.email,
      },
      where: {
        email: req.body.email,
      }
    });
    return user.id;
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//Counts all active users
exports.countAll = async (req, res) => {
  try {
    const totalItems = await userModel.count({
      where: {
        deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } }
      }
    });
    return totalItems;
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

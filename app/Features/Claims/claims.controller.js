const claimModel = require("./claims.model");
const { getPagination, getPagingData } = require("../../Shared/pagination");
const dbConfig = require("../../../config/database");
const Op = dbConfig.Sequelize.Op;

// Create and Save a new claim
exports.create = async (req, res) => {
  try {
    // Create and save a claim
    const newClaim = await claimModel.create({
      title: req.body.title,
      message: req.body.message,
      claimantUserId: req.body.userId,
      deviceId: req.body.deviceId,
    });
    res.send(newClaim);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Retrieve all claims from the database.
exports.findAll = async (req, res) => {
  const { page, size, title } = req.query;
  let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  condition = { ...condition, deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } } };

  try {
    const { limit, offset } = getPagination(page, size);
    const data = await claimModel.findAndCountAll({
      where: condition,
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });
    const response = getPagingData(data, page, limit);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Find a single claim with an id
exports.findOne = async (req, res) => {
  try {
    const data = await claimModel.findByPk(req.params.id);
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Patch a response claim by the id in the request
exports.patch = async (req, res) => {
  try {
    const claimPatched = await claimModel.update(
      {
        respondentUserId: req.body.userId,
        response: req.body.response,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send(claimPatched);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Update a claim by the id in the request
exports.put = async (req, res) => {
  try {
    const claimUpdated = await claimModel.update({
      title: req.body.title,
      message: req.body.message,
    },
      {
        where: { id: req.params.id },
      }
    );
    res.send(claimUpdated);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Delete a claim with the specified id in the request
exports.delete = async (req, res) => {
  try {
    const data = await claimModel.destroy({
      where: { id: req.params.id },
    });
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//Patch a claim to expire it with deletionDate
exports.expire = async (req, res) => {
  try {
    const claimPatched = await claimModel.update(
      {
        deletionDate: new Date(),
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send(claimPatched);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//Counts all active claims
exports.countAll = async (req, res) => {
  try {
    const totalItems = await claimModel.count({
      where: {
        //[Op.or]: { contactUserId: req.body.userId, ownerUserId: req.body.userId },
        deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } }
      }
    });
    return totalItems;
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

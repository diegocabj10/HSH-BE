const dbConfig = require("../../../config/database");
const noticeModel = require('./notices.model');
const { getPagination, getPagingData } = require("../../Shared/pagination");
const Op = dbConfig.Sequelize.Op;

// Create and Save a new notice
exports.create = async (req, res) => {
  try {
    // Create and save a notice
    const newNotice = await noticeModel.create({
      title: req.body.title,
      message: req.body.message,
      noticerUserId: req.body.userId,
      deviceId: req.body.deviceId,
    });
    res.send(newNotice);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

// Retrieve all notices from the database.
exports.findAll = async (req, res) => {
  const { page, size, title, message } = req.query;
  let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  condition = { ...condition, deletionDate: { [Op.or] : { [Op.gte]: new Date(), [Op.is]: null }} };
  try {
    const { limit, offset } = getPagination(page, size);
    const data = await noticeModel.findAndCountAll({
      where: condition,
      limit,
      offset,
      order:[['createdAt','DESC']],
    });
    const response = getPagingData(data, page, limit);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Find a single notice with an id
exports.findOne = async (req, res) => {
  try {
    const data = await noticeModel.findByPk(req.params.id);
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Update a notice by the id in the request
exports.update = async (req, res) => {
  try {
    const noticeUpdated = await noticeModel.update(
      {
        title: req.body.title,
        message: req.body.message,
        userId: req.body.userId,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send(noticeUpdated);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Delete a notice with the specified id in the request
exports.delete = async (req, res) => {
  try {
    const noticeDeleted = await noticeModel.destroy({
      where: { id: req.params.id },
    });
    res.send(noticeDeleted);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//Patch a notice to expire it with deletionDate
exports.expire = async (req, res) => {
  try {
    const noticePatched = await noticeModel.update(
      {
        deletionDate: new Date(),
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send(noticePatched);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//Counts all active notices
exports.countAll = async (req, res) => {
  try {
    const totalItems = await noticeModel.count({
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

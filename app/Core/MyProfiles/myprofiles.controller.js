const { profiles, usageType } = require('../../../config/enums');
const userProfileDeviceModel = require("../MyDevices/userProfileDevice.model");
const profileModel = require("../Profiles/profiles.model");
const dbConfig = require("../../../config/database");
const Op = dbConfig.Sequelize.Op;
const Sequelize = dbConfig.Sequelize;

//Retrieve all profiles without pagination and named in a specific format
exports.findList = async (req, res) => {
  try{
    const data = await profileModel.findAll({
      where: { deletionDate: { [Op.or]: { [Op.gte]: new Date(), [Op.is]: null } },
        id: {
          [Op.in]: [
            Sequelize.literal('Select Distinct profileId From UsersProfilesDevices Where userId = ' + req.body.userId +
              ' And (deletionDate is null Or deletionDate >= now())')
          ]
        }
      },
      attributes: [['name', 'profile'], 'read', 'create', 'update', 'delete', 'erase'],
      order: [[Sequelize.col('name')]],
    });
    res.send(data);
  }
  catch (err) {
    res.status(500).send(err.message);
  }
};

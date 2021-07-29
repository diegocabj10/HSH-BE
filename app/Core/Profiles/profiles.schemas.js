const joi = require("joi");

const schemaCreateProfile = joi.object({
  name: joi.string().required(),
  read: joi.string().allow(null,''),
  delete: joi.string().allow(null,''),
  create: joi.string().allow(null,''),
  update: joi.string().allow(null,''),
  delete: joi.string().allow(null,''),
  erase: joi.string().allow(null,''),
  userId: joi.number()
});

const schemaUpdateProfile = joi.object({
  name: joi.string().required(),
  read: joi.string().allow(null,''),
  create: joi.string().allow(null,''),
  delete: joi.string().allow(null,''),
  update: joi.string().allow(null,''),
  delete: joi.string().allow(null,''),
  erase: joi.string().allow(null,''),
  userId: joi.number()
});

const schemaIdParam = joi.object().keys({
  id: joi.string().required(),
});

module.exports = {
  schemaCreateProfile,
  schemaUpdateProfile,
  schemaIdParam,
};

const joi = require("joi");

const schemaCreateUser = joi.object({
  email: joi.string().email().required(),
  phone: joi.string().required(),
  password: joi.string().required(),
  name: joi.string().required(),
  lastName: joi.string().required(),
});

const schemaUpdateUser = joi.object({
  email: joi.string().email().required(),
  phone: joi.string().required(),
  password: joi.string().required(),
  name: joi.string().required(),
  lastName: joi.string().required(),
});

const schemaPatchUser = joi.object({
  password: joi.string().required(),
  userId: joi.number(),
});

const schemaIdParam = joi.object().keys({
  id: joi.string().required(),
});

module.exports = {
  schemaCreateUser,
  schemaUpdateUser,
  schemaPatchUser,
  schemaIdParam,
};

const joi = require("joi");

const schemaCreateMyContact = joi.object({
  email: joi.string().email().required(),
  deviceId: joi.number().min(0).required(),
  contactTypeId: joi.number().min(0).required(),
  userId: joi.number(),
});

const schemaIdParam = joi.object().keys({
  id: joi.string().required(),
});

const schemaPatchMyContact = joi.object({
  deviceId: joi.number().min(0).required(),
  userId: joi.number(),
});

module.exports = {
  schemaCreateMyContact,
  schemaPatchMyContact,
  schemaIdParam,
};

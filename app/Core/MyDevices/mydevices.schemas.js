const joi = require("joi");

const schemaCreateMyDevices = joi.object({
  serialNumber: joi.string().required(),
  pin: joi.number().required(),
  userId: joi.number(),
});

const schemaPatchDevice = joi.object({
  name: joi.string().required(),
  userId: joi.number(),
});

const schemaIdParam = joi.object().keys({
  id: joi.string().required(),
});

module.exports = {
  schemaCreateMyDevices,
  schemaPatchDevice,
  schemaIdParam,
};

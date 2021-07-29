const joi = require("joi");

const schemaMyDevices = joi.object({
  serialNumber: joi.string().required(),
  pin: joi.number().required(),
  userId: joi.number(),
});

const schemaIdParam = joi.object().keys({
  id: joi.string().required(),
});

module.exports = {
  schemaMyDevices,
  schemaIdParam,
};
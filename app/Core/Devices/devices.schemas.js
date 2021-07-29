const joi = require("joi");

const schemaCreateDevice = joi.object({
  serialNumber: joi.string().required(),
  usageTypeId: joi.number().required(),
  userId: joi.number(),
});

const schemaUpdateDevice = joi.object({
  serialNumber: joi.string().required(),
  usageTypeId: joi.number().required(),
  userId: joi.number(),
});

const schemaIdParam = joi.object().keys({
  id: joi.string().required(),
});

module.exports = {
  schemaCreateDevice,
  schemaUpdateDevice,
  schemaIdParam,
};

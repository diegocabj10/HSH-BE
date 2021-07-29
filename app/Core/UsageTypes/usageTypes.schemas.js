const joi = require("joi");

const schemaCreateUsageType = joi.object({
  name: joi.string().required(),
  userId: joi.number()
});

const schemaUpdateUsageType = joi.object({
  name: joi.string().required(),
  userId: joi.number()
});

const schemaIdParam = joi.object().keys({
  id: joi.string().required(),
});

module.exports = {
  schemaCreateUsageType,
  schemaUpdateUsageType,
  schemaIdParam,
};

const joi = require("joi");

const schemaCreateSignal = joi.object({
  name: joi.string().required(),
  userId: joi.number(),
});

const schemaUpdateSignal = joi.object({
  name: joi.string().required(),
  userId: joi.number(),
});

const schemaIdParam = joi.object().keys({
  id: joi.string().required(),
});

module.exports = {
  schemaCreateSignal,
  schemaUpdateSignal,
  schemaIdParam,
};

const joi = require("joi");

const schemaCreateClaim = joi.object({
  title: joi.string().required(),
  message: joi.string().required(),
  userId: joi.number(),
});

const schemaUpdateClaim = joi.object({
  title: joi.string().required(),
  message: joi.string().required(),
  userId: joi.number(),
});

const schemaPatchClaim = joi.object({
  response: joi.string(),
  userId: joi.number(),
});

const schemaIdParam = joi.object().keys({
  id: joi.string().required(),
});

module.exports = {
  schemaCreateClaim,
  schemaUpdateClaim,
  schemaPatchClaim,
  schemaIdParam,
};

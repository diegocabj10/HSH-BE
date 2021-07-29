const joi = require("joi");

const schemaCreateNotice = joi.object({
  title: joi.string().required(),
  message: joi.string().required(),
  response: joi.string().required(),
  userId: joi.number(),
});

const schemaUpdateNotice = joi.object({
  title: joi.string().required(),
  message: joi.string().required(),
  claimResponse: joi.string().required(),
  userId: joi.number(),
});

const schemaIdParam = joi.object().keys({
  id: joi.string().required(),
});

module.exports = {
  schemaCreateNotice,
  schemaUpdateNotice,
  schemaIdParam,
};

const joi = require("joi");

const schemaCreateContactType = joi.object({
  name: joi.string().required(),
  userId: joi.number()
});

const schemaUpdateContactType = joi.object({
  name: joi.string().required(),
  userId: joi.number()
});

const schemaIdParam = joi.object().keys({
  id: joi.string().required(),
});

module.exports = {
  schemaCreateContactType,
  schemaUpdateContactType,
  schemaIdParam,
};

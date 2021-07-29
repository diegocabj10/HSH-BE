const joi = require("joi");

const schemaIdParam = joi.object().keys({
  id: joi.string().required(),
  userId: joi.number(),
});
module.exports = {
  schemaIdParam,
};

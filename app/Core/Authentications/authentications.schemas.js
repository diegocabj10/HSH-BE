const joi = require("joi");
const schemaLoginUser = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});
module.exports = { schemaLoginUser };

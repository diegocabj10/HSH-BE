const joi = require("joi");

const schemaCreateEvent = joi.object({
  signalId: joi.number().min(0).required(),
  serialNumber: joi.string().required(),
  value: joi.number().min(0).required(),
});

module.exports = {
  schemaCreateEvent
};

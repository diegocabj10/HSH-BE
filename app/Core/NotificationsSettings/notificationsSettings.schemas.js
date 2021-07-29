const joi = require("joi");

const schemaCreateNotificationSetting = joi.object({
    signalId: joi.number().min(0).required(),
    valueFrom: joi.number().required(),
    valueTo: joi.number().required(),
    title: joi.string().required(),
    message: joi.string().required(),
    userId: joi.number(),
});

const schemaUpdateNotificationSetting = joi.object({
    signalId: joi.number().min(0).required(),
    valueFrom: joi.number().required(),
    valueTo: joi.number().required(),
    title: joi.string().required(),
    message: joi.string().required(),
    userId: joi.number(),
});

const schemaIdParam = joi.object().keys({
    id: joi.string().required(),
});

module.exports = {
    schemaCreateNotificationSetting,
    schemaUpdateNotificationSetting,
    schemaIdParam,
};

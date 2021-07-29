
const notifications = require('./notifications.controller');
const router = require('express').Router();
const {
    validateIdParam,
  } = require("../../Shared/validationRequest");
const {
    schemaIdParam,
  } = require("./notifications.schemas");

// Retrieve all Notifications
router.get('/', notifications.findAll);

// Retrieve a single Notification with id
router.get('/:id', notifications.findOne);

// Patch a notification to expire it
router.patch("/expires/:id",
  [validateIdParam(schemaIdParam)], 
  notifications.expire
);

module.exports = router;
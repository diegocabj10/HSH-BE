const router = require("express").Router();
const notificationsSettings = require("./notificationsSettings.controller");
const {
  validateIdParam,
  validateBody,
} = require("../../Shared/validationRequest");
const {
  schemaCreateNotificationSetting,
  schemaUpdateNotificationSetting,
  schemaIdParam,
} = require("./notificationsSettings.schemas");

// Retrieve all notificationsSettings
router.get("/", notificationsSettings.findAll);
// Retrieve a single profile
router.get("/:id", notificationsSettings.findOne);
// Create a new profile
router.post("/", validateBody(schemaCreateNotificationSetting), notificationsSettings.create);
// Update a profile with id
router.put(
  "/:id",
  [validateIdParam(schemaIdParam),
  validateBody(schemaUpdateNotificationSetting)],
  notificationsSettings.put);
// Delete a profile with id
router.delete("/:id", validateIdParam(schemaIdParam), notificationsSettings.delete);
// Patch a profile to expire it
router.patch("/expires/:id",
  [validateIdParam(schemaIdParam)],
  notificationsSettings.expire
);

module.exports = router;
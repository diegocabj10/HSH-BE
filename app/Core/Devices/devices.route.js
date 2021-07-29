const router = require("express").Router();
const devices = require("./devices.controller");
const {
  validateIdParam,
  validateBody,
} = require("../../Shared/validationRequest");
const {
  schemaCreateDevice,
  schemaUpdateDevice,
  schemaPatchDevice,
  schemaIdParam,
} = require("./devices.schemas");

// Retrieve all Devices
router.get("/", devices.findAll);
// Retrieve a single device by id
router.get("/:id", devices.findOne);
// Create a new Device
router.post("/", validateBody(schemaCreateDevice), devices.create);
// Update a single device by id
router.put(
  "/:id",
  [validateIdParam(schemaIdParam), validateBody(schemaUpdateDevice)],
  devices.update
);
// Delete a single device by id
router.delete("/:id", validateIdParam(schemaIdParam), devices.delete);
// Patch a device to expire it
router.patch("/expires/:id", validateIdParam(schemaIdParam),
  devices.expire
);

module.exports = router;

const router = require("express").Router();
const mydevices = require("./mydevices.controller");
const {
  schemaCreateMyDevices,
  schemaPatchDevice,
  schemaIdParam } = require("./mydevices.schemas");
const { validateIdParam, validateBody } = require("../../Shared/validationRequest");

router.post("/", validateBody(schemaCreateMyDevices), mydevices.addOwner);

// Retrieve all mydevices
router.get("/", mydevices.findAll);
// Retrieve all mydevices without pagination
router.get("/listall", mydevices.findList);
// Retrieve a single mydevice by id
router.get("/:id", mydevices.findOne);
// Rename a single device by id
router.patch(
  "/:id",
  [validateIdParam(schemaIdParam), validateBody(schemaPatchDevice)],
  mydevices.rename
);
// Patch a mydevice to expire it
router.patch("/expires/:id", validateIdParam(schemaIdParam), mydevices.expire);

module.exports = router;

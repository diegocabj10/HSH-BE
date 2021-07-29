const signals = require("./signals.controller");
const router = require("express").Router();
const {
  validateIdParam,
  validateBody,
} = require("../../Shared/validationRequest");
const {
  schemaCreateSignal,
  schemaUpdateSignal,
  schemaIdParam,
} = require("./signals.schemas");

// Retrieve all signals
router.get("/", signals.findAll);
// Retrieve all signals without pagination
router.get("/listall", signals.findList);
// Retrieve a single signal by id
router.get("/:id", signals.findOne);
// Create a new signal
router.post("/", validateBody(schemaCreateSignal), signals.create);
// Update a signal with id
router.put(
  "/:id",
  [validateIdParam(schemaIdParam), validateBody(schemaUpdateSignal)],
  signals.update);
// Delete a signal with id
router.delete("/:id", validateIdParam(schemaIdParam), signals.delete);
// Patch a signal to expire it
router.patch("/expires/:id", validateIdParam(schemaIdParam),
  signals.expire
);

module.exports = router;

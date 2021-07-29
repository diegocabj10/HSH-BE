const UsageTypes = require("./usageTypes.controller");
const router = require("express").Router();
const {
  validateIdParam,
  validateBody,
} = require("../../Shared/validationRequest");
const {
  schemaCreateUsageType,
  schemaUpdateUsageType,
  schemaIdParam,
} = require("./usageTypes.schemas");

// Retrieve all usageTypes
router.get("/", UsageTypes.findAll);
// Retrieve all usageTypes without pagination
router.get("/listall", UsageTypes.findList);
// Retrieve a single usageType
router.get("/:id", UsageTypes.findOne);
// Create a new usageType
router.post("/", validateBody(schemaCreateUsageType), UsageTypes.create);
// Update a usageType with id
router.put(
  "/:id",
  [validateIdParam(schemaIdParam), validateBody(schemaUpdateUsageType)],
  UsageTypes.update);
// Delete a usageType with id
router.delete("/:id", validateIdParam(schemaIdParam), UsageTypes.delete);
// Patch a usageType to expire it
router.patch("/expires/:id",
  [validateIdParam(schemaIdParam)],
  UsageTypes.expire
);

module.exports = router;

const ContactTypes = require("./contactTypes.controller");
const router = require("express").Router();
const {
  validateIdParam,
  validateBody,
} = require("../../Shared/validationRequest");
const {
  schemaCreateContactType,
  schemaUpdateContactType,
  schemaIdParam,
} = require("./contactTypes.schemas");

// Retrieve all contactTypes
router.get("/", ContactTypes.findAll);
// Retrieve all usageTypes without pagination
router.get("/listall", ContactTypes.findList);
// Retrieve a single contactType
router.get("/:id", ContactTypes.findOne);
// Create a new contactType
router.post("/", validateBody(schemaCreateContactType), ContactTypes.create);
// Update a contactType with id
router.put(
  "/:id",
  [validateIdParam(schemaIdParam), validateBody(schemaUpdateContactType)],
  ContactTypes.update);
// Delete a contactType with id
router.delete("/:id", validateIdParam(schemaIdParam), ContactTypes.delete);
// Patch a contactType to expire it
router.patch("/expires/:id",
  [validateIdParam(schemaIdParam)],
  ContactTypes.expire
);

module.exports = router;

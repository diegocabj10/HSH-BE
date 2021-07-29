const profiles = require("./profiles.controller");
const router = require("express").Router();
const {
  validateIdParam,
  validateBody,
} = require("../../Shared/validationRequest");
const {
  schemaCreateProfile,
  schemaUpdateProfile,
  schemaPatchProfile,
  schemaIdParam,
} = require("./profiles.schemas");

// Retrieve all profiles
router.get("/", profiles.findAll);
// Retrieve a single profile
router.get("/:id", profiles.findOne);
// Create a new profile
router.post("/", validateBody(schemaCreateProfile), profiles.create);
// Update a profile with id
router.put(
  "/:id",
  [validateIdParam(schemaIdParam), validateBody(schemaUpdateProfile)],
  profiles.update);
// Delete a profile with id
router.delete("/:id", validateIdParam(schemaIdParam), profiles.delete);
// Patch a profile to expire it
router.patch("/expires/:id", validateIdParam(schemaIdParam), profiles.expire);

module.exports = router;

const notices = require("./notices.controller");
const router = require("express").Router();
const {
  validateIdParam,
  validateBody,
} = require("../../Shared/validationRequest");
const {
  schemaCreateNotice,
  schemaUpdateNotice,
  schemaIdParam,
} = require("./notices.schemas");

// Create a new user
router.post("/", validateBody(schemaCreateNotice), notices.create);

// Retrieve all notices
router.get("/", notices.findAll);

// Retrieve a single user with id
router.get("/:id", notices.findOne);

// Update a user with id
router.put(
  "/:id",
  [validateIdParam(schemaIdParam), validateBody(schemaUpdateNotice)],
  notices.update
);

// Delete a user with id
router.delete("/:id", notices.delete);

// Patch a notice to expire it
router.patch("/expires/:id",
  [validateIdParam(schemaIdParam)],
  notices.expire
);

module.exports = router;

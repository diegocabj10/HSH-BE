const users = require("./users.controller");
const router = require("express").Router();
const {
  validateIdParam,
  validateBody,
} = require("../../Shared/validationRequest");
const {
  schemaCreateUser,
  schemaUpdateUser,
  schemaPatchUser,
  schemaIdParam,
} = require("./users.schemas");

// Create a new user
router.post("/", validateBody(schemaCreateUser), users.create);

// Retrieve all users
router.get("/", users.findAll);

// Retrieve a single user with id
router.get("/:id", users.findOne);

// Update a user with id
router.put(
  "/:id",
  [validateIdParam(schemaIdParam), validateBody(schemaUpdateUser)],
  users.update
);

// Patch an user with id
router.patch("/:id", [validateIdParam(schemaIdParam), validateBody(schemaPatchUser)], users.patch);

// Delete a user with id
router.delete("/:id", users.delete);

// Patch a user to expire it
router.patch("/expires/:id",
  [validateIdParam(schemaIdParam)],
  users.expire
);

module.exports = router;

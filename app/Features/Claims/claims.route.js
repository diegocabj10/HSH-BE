const claims = require("./claims.controller");
const router = require("express").Router();
const {
  validateIdParam,
  validateBody,
} = require("../../Shared/validationRequest");
const {
  schemaCreateClaim,
  schemaUpdateClaim,
  schemaPatchClaim,
  schemaIdParam,
} = require("./claims.schemas");

// Create a new claim
router.post("/", validateBody(schemaCreateClaim), claims.create);

// Retrieve all claims
router.get("/", claims.findAll);

// Retrieve a single claim with id
router.get("/:id", claims.findOne);

// Update a claim with id
router.put(
  "/:id",
  [validateIdParam(schemaIdParam), validateBody(schemaUpdateClaim)],
  claims.put
);

// Delete a claim with id
router.delete("/:id", validateIdParam(schemaIdParam), claims.delete);

// Patch a claim with id
router.patch(
  "/:id",
  [validateIdParam(schemaIdParam), validateBody(schemaPatchClaim)],
  claims.patch
);

// Patch a claim to expire it
router.patch("/expires/:id",
  [validateIdParam(schemaIdParam)],
  claims.expire
);

module.exports = router;

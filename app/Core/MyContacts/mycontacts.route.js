const router = require("express").Router();
const mycontacts = require("./mycontacts.controller");
const { schemaCreateMyContact, schemaIdParam, schemaPatchMyContact } = require("./mycontacts.schemas");
const { validateIdParam, validateBody } = require("../../Shared/validationRequest");

router.post("/", validateBody(schemaCreateMyContact), mycontacts.addContact);

// Retrieve all Contacts
router.get("/", mycontacts.findAll);

// Retrieve a single myContact by id
router.get("/:id", validateIdParam(schemaIdParam), mycontacts.findOne);

// Patch myContact with id
router.patch("/:id", [validateIdParam(schemaIdParam), validateBody(schemaPatchMyContact)], mycontacts.patch);

module.exports = router;

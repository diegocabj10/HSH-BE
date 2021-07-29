const router = require("express").Router();
const mydevices = require("./myprofiles.controller");
const { schemaMyDevices } = require("./myprofiles.schemas");
const { validateBody } = require("../../Shared/validationRequest");

router.get("/listall", mydevices.findList);

module.exports = router;

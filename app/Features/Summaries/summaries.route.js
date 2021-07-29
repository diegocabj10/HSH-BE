const summaries = require("../Summaries/summaries.controller");
const router = require("express").Router();

router.get("/devices", summaries.getDevices);
router.get("/mydevices", summaries.getMyDevices);
router.get("/claims", summaries.getClaims);
router.get("/notices", summaries.getNotices);
router.get("/notifications", summaries.getNotifications);
router.get("/contacts", summaries.getContacts);
router.get("/users", summaries.getUsers);
router.get("/profiles", summaries.getProfiles);
router.get("/signals", summaries.getSignals);
router.get("/notificationsettings", summaries.getNotificationSettings);
router.get("/usagetypes", summaries.getUsageTypes);
router.get("/contacttypes", summaries.getContactTypes);

module.exports = router;

const notifications = require("../Notifications/notifications.controller");
const claims = require("../Claims/claims.controller");
const notices = require("../Notices/notices.controller");
const users = require("../Users/users.controller");
const devices = require("../../Core/Devices/devices.controller");
const mydevices = require("../../Core/MyDevices/mydevices.controller");
const mycontacts = require("../../Core/MyContacts/mycontacts.controller");
const notificationsettings = require("../../Core/NotificationsSettings/notificationsSettings.controller");
const profiles = require("../../Core/Profiles/profiles.controller");
const signals = require("../../Core/Signals/signals.controller");
const usagetypes = require("../../Core/UsageTypes/usageTypes.controller");
const contacttypes = require("../../Core/ContactTypes/contactTypes.controller");

exports.getDevices = async (req, res) => {
  try {
    let counts = await devices.countAll(req, res);
    res.send({count: counts});
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getMyDevices = async (req, res) => {
  try {
    let counts = await mydevices.countAll(req, res);
    res.send({count: counts});
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getClaims = async (req, res) => {
  try {
    let counts = await claims.countAll(req, res);
    res.send({count: counts});
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getNotices = async (req, res) => {
  try {
    let counts = await notices.countAll(req, res);
    res.send({count: counts});
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getNotifications = async (req, res) => {
  try {
    let counts = await notifications.countAll(req, res);
    res.send({count: counts});
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getContacts = async (req, res) => {
  try {
    let counts = await mycontacts.countAll(req, res);
    res.send({count: counts});
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    let counts = await users.countAll(req, res);
    res.send({count: counts});
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getProfiles = async (req, res) => {
  try {
    let counts = await profiles.countAll(req, res);
    res.send({count: counts});
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getSignals = async (req, res) => {
  try {
    let counts = await signals.countAll(req, res);
    res.send({count: counts});
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getNotificationSettings = async (req, res) => {
  try {
    let counts = await notificationsettings.countAll(req, res);
    res.send({count: counts});
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getUsageTypes = async (req, res) => {
  try {
    let counts = await usagetypes.countAll(req, res);
    res.send({count: counts});
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getContactTypes = async (req, res) => {
  try {
    let counts = await contacttypes.countAll(req, res);
    res.send({count: counts});
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

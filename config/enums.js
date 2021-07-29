const contactType = Object.freeze({
  "ADMIN": 1,
  "CONTACT": 2
});

const errorsJWT = Object.freeze({
  "EXPIRED": "jwt expired",
  "INVALID": "invalid signature",
  "NOTOKEN": "jwt must be provided",
});

const profiles = Object.freeze({
  'SYSTEM_ADMIN': 1,
  'APARTMENT_OWNER': 2,
  'APARTMENT_ADMIN': 3,
  'APARTMENT_CONTACT': 4,
  'BUILDING_OWNER': 5,
  'BUILDING_ADMIN': 6,
  'BUILDING_CONTACT': 7,
});

const signals = Object.freeze({
  "ONLINE": 1,
  "CARBON_MONOXIDE": 2,
  "OPEN_CLOSE_APERTURE": 3
});

const statusDevice = Object.freeze({
  "OFFLINE": 0,
  "ONLINE": 1
});

const usageType = Object.freeze({
  "APARTMENT": 1,
  "BUILDING": 2
});

const userNotificationStatus = Object.freeze({
  "ON": 1,
  "OFF": 2
});

module.exports = { contactType, errorsJWT, profiles, signals, statusDevice, usageType, userNotificationStatus};
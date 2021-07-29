const eventModel = require("./events.model");
const { createNotification } = require("../Notifications/notifications.controller");
const devicesController = require("../../Core/Devices/devices.controller");
const { signals, statusDevice } = require("../../../config/enums");

// Create and Save a new event
exports.create = async (req, res) => {
  try {
    const { id: deviceId, status: devicePreviousStatus } = await devicesController.findIdAndPreviousStatusDeviceBySerialNumber(req.body.serialNumber);

    await devicesController.modifyDeviceStatusAndLastConnection(deviceId, statusDevice.ONLINE);

    if (shouldNotCreateEventAndNotify(req.body.signalId, devicePreviousStatus)) {
      res.send({ message: 'Se actualizó el estado y la última conexión del dispositivo' });
    }
    else {
      let newEvent = await eventModel.create({
        signalId: req.body.signalId,
        deviceId,
        value: req.body.value,
      });

      createNotification(newEvent);
      res.send(newEvent);
    }

  } catch (err) {
    res.status(500).send(err.message);
  }
};

const shouldNotCreateEventAndNotify = (signalId, devicePreviousStatus) => {
  return (signalId == signals.ONLINE && devicePreviousStatus == statusDevice.ONLINE);
};


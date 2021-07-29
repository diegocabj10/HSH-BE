const router = require("express").Router();
const Signal = require("../app/Core/Signals/signals.model");
const Profile = require("../app/Core/Profiles/profiles.model");
const NotificationSetting = require("../app/Core/NotificationsSettings/notificationsSettings.model");
const User = require("../app/Features/Users/users.model");
const Device = require("../app/Core/Devices/devices.model");
const UsageTypes = require("../app/Core/UsageTypes/usageTypes.model");
const ContactTypes = require("../app/Core/ContactTypes/contactTypes.model");
const { statusDevice } = require("../config/enums");

router.post("/", async (req, res) => {

    //Signals
    await Signal.findOrCreate({
        defaults: { id: 1, name: 'ONLINE', createdAt: Date.now(), updatedAt: Date.now() },
        where: { id: 1 }
    });
    await Signal.findOrCreate({
        defaults: { id: 2, name: 'CARBON_MONOXIDE', createdAt: Date.now(), updatedAt: Date.now() },
        where: { id: 2 }
    });
    await Signal.findOrCreate({
        defaults: { id: 3, name: 'OPEN_CLOSE_APERTURE', createdAt: Date.now(), updatedAt: Date.now() },
        where: { id: 3 }
    });

    //NotificationsSettings

    await NotificationSetting.findOrCreate({
        defaults: {
            id: 1, signalId: 1, valueFrom: statusDevice.ONLINE, valueTo: statusDevice.ONLINE,
            title: 'Dispositivo online', message: 'Se ha encendido el dispositivo.',
            deletionDate: null, createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 1 }
    });
    await NotificationSetting.findOrCreate({
        defaults: {
            id: 3, signalId: 3, valueFrom: 0, valueTo: 0,
            title: 'Apertura de puerta o ventana', message: 'Se ha detectado una apertura de la puerta o ventana.',
            deletionDate: null, createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 3 }
    });
    await NotificationSetting.findOrCreate({
        defaults: {
            id: 4, signalId: 3, valueFrom: 1, valueTo: 1,
            title: 'Cierre de puerta o ventana', message: 'Se ha detectado un cierre de la puerta o ventana.',
            deletionDate: null, createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 4 }
    });
    await NotificationSetting.findOrCreate({
        defaults: {
            id: 5, signalId: 2, valueFrom: 35, valueTo: 99,
            title: 'Monóxido de Carbono', message: 'Presencia de CO (+0.0035%): Dolor de cabeza y mareos en el plazo de 6 a 8 horas de exposición constante',
            deletionDate: null, createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 5 }
    });
    await NotificationSetting.findOrCreate({
        defaults: {
            id: 6, signalId: 2, valueFrom: 100, valueTo: 199,
            title: 'Monóxido de Carbono', message: 'Presencia de CO (+0.01%): Cefalea leve en 2 o 3 horas.',
            deletionDate: null, createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 6 }
    });
    await NotificationSetting.findOrCreate({
        defaults: {
            id: 7, signalId: 2, valueFrom: 200, valueTo: 399,
            title: 'Monóxido de Carbono', message: 'Presencia de CO (+0.02%): En 2 a 3 horas se puede observar un leve dolor de cabeza, náuseas, vértigo y síntomas mentales (pérdida de razonamiento).',
            deletionDate: null, createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 7 }
    });
    await NotificationSetting.findOrCreate({
        defaults: {
            id: 8, signalId: 2, valueFrom: 400, valueTo: 799,
            title: 'Monóxido de Carbono', message: 'Presencia de CO (+0.04%): En 2 a 3 horas se puede observar un fuerte dolor de cabeza, incoordinación muscular, debilidad, vómitos y colapso.',
            deletionDate: null, createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 8 }
    });
    await NotificationSetting.findOrCreate({
        defaults: {
            id: 9, signalId: 2, valueFrom: 800, valueTo: 1099,
            title: 'Monóxido de Carbono', message: 'Presencia de CO (+0.08%): Fuerte dolor de cabeza, debilidad, vómitos, mareos, náuseas, convulsiones y colapso dentro de los 45 minutos.',
            deletionDate: null, createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 9 }
    });
    await NotificationSetting.findOrCreate({
        defaults: {
            id: 10, signalId: 2, valueFrom: 1100, valueTo: 1599,
            title: 'Monóxido de Carbono', message: 'Presencia de CO (+0.11%): Después de 1.5 a 3 horas se puede observar coma. (La respiración es aún bastante buena a no ser que el envenenamiento se haya prolongado).',
            deletionDate: null, createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 10 }
    });
    await NotificationSetting.findOrCreate({
        defaults: {
            id: 11, signalId: 2, valueFrom: 1600, valueTo: 3199,
            title: 'Monóxido de Carbono', message: 'Presencia de CO (+0.16%): Cefalea, taquicardia, mareos y náuseas dentro de los 20 minutos; la muerte en menos de 2 horas.',
            deletionDate: null, createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 11 }
    });
    await NotificationSetting.findOrCreate({
        defaults: {
            id: 12, signalId: 2, valueFrom: 3200, valueTo: 4999,
            title: 'Monóxido de Carbono', message: 'Presencia de CO (+0.32%): Cefaleas, mareos y náuseas en 5 o 10 minutos. Muerte dentro de los 30 minutos.',
            deletionDate: null, createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 12 }
    });
    await NotificationSetting.findOrCreate({
        defaults: {
            id: 13, signalId: 2, valueFrom: 5000, valueTo: 6399,
            title: 'Monóxido de Carbono', message: 'Presencia de CO (+0.5%): Después de 2 a 15 minutos se puede producir la muerte.',
            deletionDate: null, createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 13 }
    });
    await NotificationSetting.findOrCreate({
        defaults: {
            id: 14, signalId: 2, valueFrom: 6400, valueTo: 12799,
            title: 'Monóxido de Carbono', message: 'Presencia de CO (+0.64%): Dolor de cabeza y mareos en 1 o 2 minutos. Convulsiones, paro respiratorio y muerte en menos de 15 minutos.',
            deletionDate: null, createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 14 }
    });
    await NotificationSetting.findOrCreate({
        defaults: {
            id: 14, signalId: 2, valueFrom: 12800, valueTo: 99999,
            title: 'Monóxido de Carbono', message: 'Presencia de CO (+1.28%): Inconsciencia después de 2 ó 3 respiraciones. Muerte en menos de 3 minutos.',
            deletionDate: null, createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 14 }
    });

    //Users
    await User.findOrCreate({
        defaults: {
            id: 1, email: 'diegocampos0909@gmail.com', phone: '+5493516159277',
            name: 'Diego', lastName: 'Campos', password: 'admin1234',
            deletionDate: null, createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 1 }
    });
    await User.findOrCreate({
        defaults: {
            id: 2, email: 'marcostavorda@gmail.com', phone: '+5493515901415',
            name: 'Marcos', lastName: 'Tavorda', password: 'admin1234',
            deletionDate: null, createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 2 }
    });
    await User.findOrCreate({
        defaults: {
            id: 3, email: 'francoluna@gmail.com', phone: '+5493517737392',
            name: 'Franco', lastName: 'Luna', password: 'admin1234',
            deletionDate: null, createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 3 }
    });
    await User.findOrCreate({
        defaults: {
            id: 4, email: 'diegomarchetti@gmail.com', phone: '+5493547513267',
            name: 'Diego', lastName: 'Marchetti', password: 'admin1234',
            deletionDate: null, createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 4 }
    });

    //UsageTypes
    await UsageTypes.findOrCreate({
        defaults: { id: 1, name: 'APARTMENT', createdAt: Date.now(), updatedAt: Date.now() },
        where: { id: 1 }
    });
    await UsageTypes.findOrCreate({
        defaults: { id: 2, name: 'BUILDING', createdAt: Date.now(), updatedAt: Date.now() },
        where: { id: 2 }
    });

    //ContactTypes
    await ContactTypes.findOrCreate({
        defaults: { id: 1, name: 'ADMIN', createdAt: Date.now(), updatedAt: Date.now() },
        where: { id: 1 }
    });
    await ContactTypes.findOrCreate({
        defaults: { id: 2, name: 'CONTACT', createdAt: Date.now(), updatedAt: Date.now() },
        where: { id: 2 }
    });

    //Devices
    await Device.findOrCreate({
        defaults: {
            id: 1, name: 'Arduino1', serialNumber: 'AAAA',
            pin: '2929', usageTypeId: 1,
            lastConnection: null, status: 0,
            deletionDate: null, createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 1 }
    });
    await Device.findOrCreate({
        defaults: {
            id: 2, name: 'Arduino2', serialNumber: 'BBBB',
            pin: '2929', usageTypeId: 1,
            lastConnection: null, status: 0,
            deletionDate: null, createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 2 }
    });

    //Profiles
    await Profile.findOrCreate({
        defaults: {
            id: 1, name: 'SYSTEM_ADMIN',
            read: '1,7,8,9,10,11,12', create: '1,7,8,9,10,11,12',
            update: '1,7,8,9,10,11,12', delete: '1,7,8,9,10,11,12',
            erase: '',
            createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 1 }
    });
    await Profile.findOrCreate({
        defaults: {
            id: 2, name: 'APARTMENT_OWNER',
            read: '2,3,4,5,6', create: '2,3,6',
            update: '2,6', delete: '2,3,4,5,6',
            createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 2 }
    });
    await Profile.findOrCreate({
        defaults: {
            id: 3, name: 'APARTMENT_ADMIN',
            read: '2,3,4,5,6', create: '3,6',
            update: '6', delete: '3,4,5,6',
            createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 3 }
    });
    await Profile.findOrCreate({
        defaults: {
            id: 4, name: 'APARTMENT_CONTACT',
            read: '5', create: null,
            update: null, delete: '5',
            createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 4 }
    });
    await Profile.findOrCreate({
        defaults: {
            id: 5, name: 'BUILDING_OWNER',
            read: '2,3,4,6', create: '2,3,4,6',
            update: '3,6', delete: '2,3,4,6',
            createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 5 }
    });
    await Profile.findOrCreate({
        defaults: {
            id: 6, name: 'BUILDING_ADMIN',
            read: '2,3,4,6', create: '3,4,6',
            update: '3,4', delete: '3,4,6',
            createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 6 }
    });
    await Profile.findOrCreate({
        defaults: {
            id: 7, name: 'BUILDING_CONTACT',
            read: '5', create: null,
            update: null, delete: '5',
            createdAt: Date.now(), updatedAt: Date.now()
        },
        where: { id: 7 }
    });

    res.send("First insert done <a href='../'>Volver</a>");

    // get: function (fieldName) {
    //     const formattedDate = formatDate(this.getDataValue(fieldName));
    //     return formattedDate ? formattedDate : null;
    //   },
    // const formatDate = (dateToFormat) => {
    //     if (!dateToFormat) return;
    //     return new Intl.DateTimeFormat('es-AR', { dateStyle: 'full', timeStyle: 'medium' }).format(dateToFormat);
    // }
});

module.exports = router;

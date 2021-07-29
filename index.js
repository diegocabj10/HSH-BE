const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' });

const express = require('express');
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = require('./swagger.json');
const swaggerSpecifications = swaggerJSDoc({
  swaggerDefinition,
  apis: ['./app/Core/*/*.swagger.js',
    './app/Features/*/*.swagger.js'],
});
const db = require('./config/database');
const corsOptions = require('./config/cors');

const { authenticate } = require('./app/Core/Authentications/authenticate.middleware');

const routeAuthentications = require('./app/Core/Authentications/authentications.route');
const routeContactTypes = require('./app/Core/ContactTypes/contactTypes.route');
const routeDevices = require('./app/Core/Devices/devices.route');
const routeMyContacts = require('./app/Core/MyContacts/mycontacts.route');
const routeMyDevices = require('./app/Core/MyDevices/mydevices.route');
const routeNotificationsSettings = require('./app/Core/NotificationsSettings/notificationsSettings.route');
const routeProfiles = require('./app/Core/Profiles/profiles.route');
const routeSignals = require('./app/Core/Signals/signals.route');
const routeUsageTypes = require('./app/Core/UsageTypes/usageTypes.route');
const routeMyProfiles = require('./app/Core/MyProfiles/myprofiles.route');

const routeClaims = require('./app/Features/Claims/claims.route');
const routeEvents = require('./app/Features/Events/events.route');
const routeNotifications = require('./app/Features/Notifications/notifications.route');
const routeNotices = require('./app/Features/Notices/notices.route');
const routeUsers = require('./app/Features/Users/users.route');
const routeSummaries = require('./app/Features/Summaries/summaries.route');

const Test = require('./public/Test');

const app = express();
db.sync();

app.use(express.static('./public'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(
  '/api/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecifications, { explorer: true })
);

//Core
app.use('/api/signals', authenticate, routeSignals);
app.use('/api/contacttypes', authenticate, routeContactTypes);
app.use('/api/mycontacts', authenticate, routeMyContacts);
app.use('/api/mydevices', authenticate, routeMyDevices);
app.use('/api/notificationssettings', authenticate, routeNotificationsSettings);
app.use('/api/notificationssettings', authenticate, routeProfiles);
app.use('/api/devices', authenticate, routeDevices);
app.use('/api/usagetypes', authenticate, routeUsageTypes);
app.use('/api/profiles', authenticate, routeProfiles);
app.use('/api/myprofiles', authenticate, routeMyProfiles);

//Features
app.use('/api/authentications', routeAuthentications);
app.use('/api/claims', authenticate, routeClaims);
app.use('/api/events', routeEvents);
app.use('/api/notices', authenticate, routeNotices);
app.use('/api/notifications', authenticate, routeNotifications);
app.use('/api/summaries', authenticate, routeSummaries);
app.use('/api/users', routeUsers);

app.use('/test', Test);

app.get('/', (req, res) => {
  res.render('index.html');
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const serverless = require('serverless-http');

const app = express();

const router = require('./routes');

app.use(express.json());
app.use('/.netlify/functions/circuit', router);
// app.use(router);

// app.listen(process.env.port, () => {
//     console.log(`Server is up and running on ${process.env.PORT}`);
// });

;

// mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Successfully connected to the database!');
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is up and running on ${process.env.PORT}`);
//         });
//     })
//     .catch((e) => console.error('Failed to connect to the database.'));

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports.handler = serverless(app);
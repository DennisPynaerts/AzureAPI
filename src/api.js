const express = require(`express`);
require(`dotenv`).config();

const mongoose = require(`mongoose`);

const router = require('./routes');
const authRouter = require('./authServer');

const app = express();

app.use(express.json());
app.use(router);
app.use(authRouter);
app.use(cors());

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Succesfully connected to the database!');
        app.listen(process.env.PORT, () => {
            console.log(`Server is up and running on ${process.env.PORT}`);
        });
    })
    .catch((e) => console.log(`Failed to connect to the database. Error ${e}`));
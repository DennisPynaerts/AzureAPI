const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const Tracks = require('./models/circuit');
const Autos = require('./models/auto');

const auth = require("../middleware/auth.js");
const { admin, gebruiker } = require("../middleware/roles.js");
const { json, append } = require('express/lib/response');

router.get('/', (req, res) => {
    console.log('Route / called')
    res.send('<h1>API voor project van Mobiele Applicaties</h1>');
});

router.get('/tracks', async(req, res) => {
    try {
        console.log('/tracks route called');
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.json(await Tracks.find())
    } catch (e) {
        console.log(e + 'het werkt niet!');
        res.sendStatus(500);
    }
});

router.get('/tracks/:id', async(req, res) => {
    try {
        console.log('find by id');
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.send(await Tracks.findById(req.params.id));
    } catch (e) {
        console.log(e + 'op id zoeken werkt niet');
        res.sendStatus(500);
    }
});

router.post('/tracks/create', async(req, res) => {
    console.log('tracks create', req.hasBody, req.body);
    console.log('tracks create', req.hasBody, req.body.naam);
    console.log('tracks create', req.hasBody, req.body.land);
    try {
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.send(await Tracks.create(req.body));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/tracks/update/:id', async(req, res) => {
    console.log('tracks update');
    try {
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.send(await Tracks.findByIdAndUpdate(req.params.id, { $set: req.body }));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/tracks/delete/:id', async(req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.send(await Tracks.findByIdAndDelete(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/autos', async(req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        console.log('/autos route called');
        res.json(await Autos.find())
    } catch (e) {
        console.log(e + 'het werkt niet!');
        res.sendStatus(500);
    }
})

router.get('/autos/:id', async(req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        console.log('find by id');
        res.send(await Autos.findById(req.params.id));
    } catch (e) {
        console.log(e + 'op id zoeken werkt niet');
        res.sendStatus(500);
    }
});

router.get('/autos/:id/modellen', async(req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        console.log(JSON.stringify(await Autos.findById(req.params.id).modellen));
        res.send(await Autos.findById(req.params.id));
    } catch (e) {
        console.log(e + ' op id zoeken werkt niet');
        res.sendStatus(500);
    }
});

router.post('/autos/create', async(req, res) => {
    console.log('tracks create');
    try {
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.send(await Autos.create(req.body));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/autos/update/:id', async(req, res) => {
    console.log('autos update');
    try {
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.send(await Autos.findByIdAndUpdate(req.params.id, { $set: req.body }));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/autos/:id', async(req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.send(await Autos.findByIdAndDelete(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;
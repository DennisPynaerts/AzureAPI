const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const Tracks = require('./models/circuit');
const Autos = require('./models/auto')

router.get('/', (req, res) => {
    console.log('Route / called')
    res.send('<h1>TEST</h1>');
});

router.get('/tracks', async(req, res) => {
    try {
        console.log('/tracks route called');
        res.json(await Tracks.find())
    } catch (e) {
        console.log(e + 'het werkt niet!');
        res.sendStatus(500);
    }
})

router.get('/tracks/:id', async(req, res) => {
    try {
        console.log('find by id');
        res.send(await Tracks.findById(req.params.id));
    } catch (e) {
        console.log(e + 'op id zoeken werkt niet');
        res.sendStatus(500);
    }
});

router.post('/tracks/create', async(req, res) => {
    console.log('tracks create');
    try {
        res.send(await Tracks.create(req.body));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/tracks/update/:id', async(req, res) => {
    console.log('tracks update');
    try {
        res.send(await Tracks.findByIdAndUpdate(req.params.id, { $set: req.body }));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/tracks/:id', async(req, res) => {
    try {
        res.send(await Tracks.findById(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/autos', async(req, res) => {
    try {
        console.log('/autos route called');
        res.json(await Autos.find())
    } catch (e) {
        console.log(e + 'het werkt niet!');
        res.sendStatus(500);
    }
})

router.get('/autos/:id', async(req, res) => {
    try {
        console.log('find by id');
        res.send(await Autos.findById(req.params.id));
    } catch (e) {
        console.log(e + 'op id zoeken werkt niet');
        res.sendStatus(500);
    }
});

router.post('/autos/create', async(req, res) => {
    console.log('tracks create');
    try {
        res.send(await Autos.create(req.body));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/autos/update/:id', async(req, res) => {
    console.log('autos update');
    try {
        res.send(await Autos.findByIdAndUpdate(req.params.id, { $set: req.body }));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/autos/:id', async(req, res) => {
    try {
        res.send(await Autos.findById(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;
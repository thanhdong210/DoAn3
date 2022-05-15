const express = require('express');

const router = express.Router();

const Models = require('../models/Models');

const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', async(req, res) => {
    try {
        const model = await Models.find();
        res.json(model);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', jsonParser, (req, res) => {
    const models = new Models({
        name: req.body.name,
        action: req.body.action
    });

    models.save()
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json({ message: error });
        });

    console.log(req.body);
});

module.exports = router;
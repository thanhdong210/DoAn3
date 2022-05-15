const express = require('express');

const router = express.Router();

const NewAction = require('../models/NewAction');

const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', async(req, res) => {
    try {
        const new_action = await NewAction.find();
        res.json(new_action);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', jsonParser, (req, res) => {
    const new_action = new NewAction({
        name: req.body.name,
        description: req.body.description
    });

    new_action.save()
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json({ message: error });
            //res.send('welcome, ' + req.body.title);
        });

    console.log(req.body);
    //res.send('welcome, ' + req.body.title);
});


module.exports = router;
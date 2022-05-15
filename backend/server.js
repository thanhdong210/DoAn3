const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config');

const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//import routes
const postsRoute = require('./routes/posts');
const newActionRoute = require('./routes/new_action');
const modelsRoute = require('./routes/models');
var cors = require('cors')
const Models = require("./models/Models")

app.use(cors())

app.use('/posts', postsRoute);
app.use('/new-action', newActionRoute);
app.use('/models', modelsRoute);

run()
async function run() {
    try {
        const model = new Models({
            name: "Model999",
            action: ["62665d3ad3899862b893ca12", "626252ecded8dc5a154747ce"]
        })
        model.save()
        console.log(model)
    } catch (e) {
        console.log(e.message)
    }
    
}

//database
async function connect() {
    try {
        await mongoose.connect(
            process.env.DB_URL
        );
        console.log("connect successfully")
    } catch (error) {
        console.log(error);
    }
}

//listen to server
app.listen(process.env.PORT || 5000, async() => {
    console.log(process.env.DB_URL);
    await connect();
});
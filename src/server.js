const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
require('./components/models/qtnmodel.js');

const app = express();
const router = express.Router();
const url = processs.env.MONGODB_URI || "mongodb://localhost:27017/quizmaster";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

try {
    mongoose.connect(url, {

    })
} catch (error) {
    console.log(error);
}

//process.env.PORT is used for port assigned in production env
const PORT = process.env.PORT || 5000;
app.listen(PORT);

router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Quiz'
    });
});
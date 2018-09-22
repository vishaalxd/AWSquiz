import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './router';
// import registerServiceWorker from './registerServiceWorker';


const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



const PORT = process.env.PORT || 5000;
app.listen(PORT);






ReactDOM.render( < Routes / > , document.getElementById('root')); { /* registerServiceWorker(); */ }
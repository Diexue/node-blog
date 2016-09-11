var path = require('path');
var express = require('express');
var app = express();

app.use(express.static('./app'));

app.get('/', function (req, res) {
    'use strict';
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000);
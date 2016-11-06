var path = require('path');
var express = require('express');
var app = express();

var list = require('./models/list');
var blog = require('./models/blog');
var tag = require('./models/tag');

// app.use(express.static('./app'));

// app.get('/', function (req, res) {
//     'use strict';
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    next();
});

app.get('/latest', function (req, res) {
    console.log('enter latest');
    list.getLatestList(function (rows) {
        res.send(rows);
    });
});

app.get('/tag', function (req, res) {
    console.log('enter tag');
    list.getListByTagId(req.query.id, function (rows) {
        res.send(rows);
    });
});

app.get('/getPathById', function (req, res) {
    console.log('enter getPathById');
    blog.getPathById(req.query.id, function (rows) {
        blog.parseHtml(rows[0].path, function (html) {
            console.log(html);
            res.send(html);
        });
    });
});

app.get('/tags', function (req, res) {
    console.log('enter tags');
    tag.getTags(function (rows) {
        res.send(rows);
    });
});

app.listen(8000);
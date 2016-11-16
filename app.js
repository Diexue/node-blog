var path = require('path');
var express = require('express');
var app = express();

var list = require('./models/list');
var blog = require('./models/blog');
var tag = require('./models/tag');
var organize = require('./models/organize');

// 配置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    next();
});

// 获取最近文章列表
app.get('/latest', function (req, res) {
    console.log('enter latest');
    list.getLatestList(function (rows) {
        res.send(rows);
    });
});

// 根据标签ID获取标签对应的文章列表
app.get('/tag', function (req, res) {
    console.log('enter tag');
    list.getListByTagId(req.query.id, function (rows) {
        res.send(rows);
    });
});

// 根据博客ID获取博客内容
app.get('/getPathById', function (req, res) {
    console.log('enter getPathById');
    blog.getPathById(req.query.id, function (rows) {
        blog.parseHtml(rows[0].path, function (html) {
            console.log(html);
            res.send(html);
        });
    });
});

// 获取标签列表
app.get('/tags', function (req, res) {
    console.log('enter tags');
    tag.getTags(function (rows) {
        res.send(rows);
    });
});

// 获取归档内容
app.get('/organize', function (req, res) {
    console.log('enter organize');
    organize.getOrganizedList(function (rows) {
        // 遍历结果集，将list字符串转化为JSON对象
        rows.forEach(function (item) {
            item.list = JSON.parse(item.list);
        });
        res.send(rows);
    });
});

app.listen(8000);

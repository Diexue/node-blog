var mql = require('./mysql-model');
var markdown = require('markdown-it')();
var fs = require('fs');

var blog = {};

blog.getPathById = function (id, callback) {
    var sql = 'SELECT path FROM blog WHERE bid = ' + id;
    mql.query(sql, function (rows) {
        if (callback instanceof Function) {
            callback(rows);
        }
    });
};

blog.parseHtml = function (path, callback) {
    fs.readFile(path, {flag: 'r', encoding: 'utf8'}, function (err, data) {
        if(err) {
            console.error(err);
            return;
        }
        if (callback instanceof Function) {
            console.log(data);
            callback(markdown.render(data));
        }
    });
};

module.exports = blog;

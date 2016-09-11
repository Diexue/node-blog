var config = {
    name: 'mysql',
    version: '5.5.49',
    host: '127.0.0.1',
    database: 'duer',
    port: 3306,
    user: 'root',
    password: 'wsn999dmgsh'
};

var mysql = require('mysql');

var connection = mysql.createConnection(config);

connection.connect();

var mql = {
    query: function (sql, callback) {
        'use strict';
        connection.query(sql, function (err, rows) {
            if (err) {
                throw err;
            }
            if (callback instanceof Function) {
                callback(rows);
            }
        });
    },
    delete: function (sql, callback) {
        'use strict';
        connection.query(sql, function (err, rows) {
            if (err) {
                throw err;
            }
            if (callback instanceof Function) {
                callback(rows);
            }
        });
    },
    update: function (sql, callback) {
        'use strict';
        connection.query(sql, function (err, rows) {
            if (err) {
                throw err;
            }
            if (callback instanceof Function) {
                callback(rows);
            }
        });
    },
    insert: function (tableName, params, callback) {
        'use strict';
        var keys = Object.keys(params);
        var values = keys.map(function (key) {
            return (typeof params[key] === 'number'
                ? params[key]
                : '\'' + params[key].split('\'').join('\\\'').split('\"').join('\\\"') + '\'');
        }).join(',');

        var sql = 'INSERT INTO ' + tableName + '(' + keys.join(',') + ') VALUES(' + values + ')';

        connection.query(sql, function (err, rows) {
            if (err) {
                throw err;
            }
            if (callback instanceof Function) {
                callback(rows);
            }
        });
    },
    close: function () {
        'use strict';
        connection.end(function (err) {
            if (err) {
                throw err;
            }
        });
    }
};

module.exports = mql;
var mql = require('./mysql-model');

var List = {};

List.getLatestList = function (callback, start, offset) {
    var sql = 'SELECT a.bid, a.title, DATE_FORMAT(a.time, \'%Y-%m-%d\') time, a.path, a.intro, b.tags\
                FROM blog a,\
                    (SELECT a.blogid bid, CONCAT("[", GROUP_CONCAT(CONCAT(\'{"id":\', b.id, \',\', \'"name":\', \'"\', b.tag, \'"}\')), "]") tags\
                        FROM blogtags a, tags b\
                            WHERE a.tagId = b.id GROUP BY a.blogId) b\
                WHERE a.bid = b.bid ORDER BY a.time DESC LIMIT ';
    offset = offset || 20;
    if (start > 0) {
        sql += (start + ', ' + offset);
    } else {
        sql += offset;
    }
    mql.query(sql, function (rows) {
        if (callback instanceof Function) {
            callback(rows);
        }
    });
};

List.getListByTagId = function (id, callback) {
    var sql = 'SELECT a.bid, a.title, DATE_FORMAT(a.time, \'%Y-%m-%d\') time, a.path, a.intro, c.tags\
                FROM blog a, (SELECT blogid FROM blogtags WHERE tagId = ' + id + ') b,\
                (SELECT a.blogid bid, b.id, CONCAT("[", GROUP_CONCAT(CONCAT(\'{"id":\', b.id, \',\', \'"name":\', \'"\', b.tag, \'"}\')), "]") tags\
                        FROM blogtags a, tags b\
                            WHERE a.tagId = b.id GROUP BY a.blogId) c\
                WHERE a.bid = b.blogid AND a.bid = c.bid ORDER BY time DESC';
    mql.query(sql, function (rows) {
        if (callback instanceof Function) {
            console.log(rows);
            callback(rows);
        }
    });
};

List.getLatestList();

module.exports = List;

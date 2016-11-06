var mql = require('./mysql-model');

var Tag = {};

Tag.getTags = function (callback) {
    var sql = 'SELECT a.id, a.tag name, IFNULL(b.count, 0) count\
                FROM tags a LEFT JOIN\
                    (SELECT tagid, count(blogId) count FROM blogtags GROUP BY tagId) b\
                    ON a.id = b.tagid';
    mql.query(sql, function (rows) {
        callback(rows);
    });
};

module.exports = Tag;
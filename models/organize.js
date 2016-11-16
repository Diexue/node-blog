var mql = require('./mysql-model');
var organize = {};
organize.getOrganizedList = function (callback) {
    var sql = "SELECT a.year, a.count total, a.list FROM (SELECT DISTINCT YEAR(time) year,\
                    COUNT(time) count, CONCAT('[',\
                    GROUP_CONCAT(CONCAT('{\"id\": ', bid, ', \"time\": \"',\
                    time, '\", \"title\": \"', title, '\"}')), ']') list\
                FROM blog GROUP BY YEAR(time)) a ORDER BY a.year DESC";
    mql.query(sql, function (rows) {
        callback(rows);
    });
};

module.exports = organize;

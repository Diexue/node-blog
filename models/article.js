var mql = require('./mysql-model');

var article = {};

/**
 * @description 获取所有博客列表
 * @param  {Function}
 */
article.getBlogList = function (callback) {
    'use strict';
    mql.query('SELECT * FROM blog', function (rows) {
        callback(rows);
    });
};

/**
 * @description 添加一条博客
 * @param {Object} blogRow
 */
article.addBlog = function (blogRow, callback) {
    'use strict';
    mql.insert('blog', blogRow, function (rows) {
        callback(rows);
    });
};

article.getBlogList(function (resp) {
    console.log(resp);
});

module.exports = article;

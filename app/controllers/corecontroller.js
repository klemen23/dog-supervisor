'use strict';

var path = require('path');

exports.index = function (req, res) {
    res.sendfile(path.resolve("./" + 'public/index.html'));
};
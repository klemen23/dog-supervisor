'use strict';

var init = require('./config/init')();
var config = require('./config/config');
var mongoose = require('mongoose');
var _ = require('lodash');
var glob = require('glob');
// Bootstrap db connection

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
    console.log('Open');
});


// Init the express application
var app = require('./config/express')(db);

// Bootstrap passport config
require('./config/passport')();

// Start the app by listening on <port>
app.listen(config.port);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('Dog hotel application started on port ' + config.port);
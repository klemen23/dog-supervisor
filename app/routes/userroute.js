'use strict';

var passport = require('passport');

module.exports = function (app) {
    // User Routes
    var users = require('../../app/controllers/usercontroller');

    // Setting up the users profile api
    app.route('/api/users/me').get(users.me);

    app.route('/api/users/list').get(users.userlist);

    app.route('/api/auth/signup').post(users.signup);
    app.route('/api/auth/signin').post(users.signin);
    app.route('/api/auth/signout').get(users.signout);
    // Finish by binding the user middleware
    app.param('userId', users.userByID);
};

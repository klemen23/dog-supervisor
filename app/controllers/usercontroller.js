'use strict';

var _ = require('lodash'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	User = mongoose.model('User');

//For Handle Errors
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}


exports.userlist = function (req, res) {
    var id = req.params.id;
    User.find(function (err, result) {
        if (err) {
            handleError(res, err.message, 'Error in getting userlist', 500);
        }
        else {
            res.json(result);
        }
    });
};

exports.signup = function (req, res) {
    // For security measurement we remove the roles from the req.body object
    delete req.body.roles;
    var user = new User(req.body);
    var message = null;

    // Add missing user fields
    user.provider = 'local';

    // Then save the user 
    user.save(function (err) {
        if (err) {
            console.log(JSON.stringify(err));
            handleError(res, err.message, 'Error in user saving', 500);
        } else {
            // Remove sensitive data before login
            user.password = undefined;
            user.salt = undefined;
            req.login(user, function (err) {
                if (err) {
                    console.log(JSON.stringify(err));
                    handleError(res, err.message, 'Error in user saving', 500);
                } else {
                    res.json(user);
                }
            });
        }
    });
};



exports.signupadmin = function (req, res) {
    // For security measurement we remove the roles from the req.body object
    delete req.body.roles;
    var user = new User(req.body);
    var message = null;

    // Add missing user fields
    user.provider = 'local';
    user.roles = ['admin'];

    // Then save the user 
    user.save(function (err) {
        if (err) {
            console.log(JSON.stringify(err));
            handleError(res, err.message, 'Error in user saving', 500);
        } else {
            // Remove sensitive data before login
            user.password = undefined;
            user.salt = undefined;
            req.login(user, function (err) {
                if (err) {
                    console.log(JSON.stringify(err));
                    handleError(res, err.message, 'Error in user saving', 500);
                } else {
                    res.json(user);
                }
            });
        }
    });
};

exports.signin = function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err || !user) {
            handleError(res, info, 'Invalid Username or Password', 400);
        } else {
            // Remove sensitive data before login
            user.password = undefined;
            user.salt = undefined;

            req.login(user, function (err) {
                if (err) {
                    handleError(res, err.message, 'Error in login', 500);
                } else {
                    res.json(user);
                }
            });
        }
    })(req, res, next);
};

exports.signout = function (req, res) {
    req.logout();
    res.redirect('/');
};

exports.userByID = function (req, res, next, id) {
    User.findOne({
        _id: id
    }).exec(function (err, user) {
        if (err) return next(err);
        if (!user) return next(new Error('Failed to load User ' + id));
        req.profile = user;
        next();
    });
};

exports.me = function (req, res) {
    res.json(req.user || null);
};

exports.requiresLogin = function (req, res, next) {
    if (!req.isAuthenticated()) {
        return  handleError(res, err.message, 'User is not logged in', 403);
    }
    next();
};

exports.hasAuthorization = function (roles) {
    var _this = this;

    return function (req, res, next) {
        _this.requiresLogin(req, res, function () {
            if (_.intersection(req.user.roles, roles).length) {
                return next();
            } else {
                return handleError(res, err.message, 'User is not authorized', 403);
               
            }
        });
    };
};


 function signupadmin() {
    // For security measurement we remove the roles from the req.body object
    var user = new User({
	"username":"admin",
    "password":"admin@123",
    "email":"admin@gmail.com"

    });

    // Add missing user fields
    user.provider = 'local';
    user.roles = ['admin'];
     
     
     User.findOne({ 'username' : 'admin' },function(erro,data){
         if(data && data != null ){
             return;
         }
         else{
        // Then save the user 
        user.save(function (err) {
            if (err) {
                console.log(JSON.stringify(err));
                handleError(res, err.message, 'Error in user saving', 500);
            } else {
                console.log('Admin Created');
            }
        });
             }
    })
};

signupadmin();

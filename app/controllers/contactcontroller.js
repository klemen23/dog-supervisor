'use strict';

var _ = require('lodash'),
	mongoose = require('mongoose'),
	Contact = mongoose.model('Contact');

//For Handle Errors
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}


exports.saveContact = function (req, res) {
    var contact = new Contact(req.body);
    contact.save(function (err, result) {
        if (err) {
            handleError(res, err.message, 'Error in making contact', 500);
        } else {
            res.json(result);
        }
    });
};



exports.getContactList = function (req, res) {
    Contact.find(function (err, result) {
        if (err) {
            handleError(res, err.message, 'Error in getting contact', 500);
        }
        else {
            res.json(result);
        }
    });
};


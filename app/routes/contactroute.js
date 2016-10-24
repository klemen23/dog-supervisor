'use strict';

module.exports = function (app) {
    // User Routes
    var contact = require('../../app/controllers/contactcontroller');


    app.route('/api/contact').get(contact.getContactList);
    app.route('/api/contact').post(contact.saveContact);
};

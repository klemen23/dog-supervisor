'use strict';

module.exports = function(app) {
    // User Routes
    var dogDetail = require('../../app/controllers/dogDetailcontroller');
    app.route('/api/dogDetail').get(dogDetail.getDogDetailList);
    app.route('/api/dogDetail/:id').get(dogDetail.getDogDetail);
    app.route('/api/dogDetail').post(dogDetail.saveDogDetail);
    app.route('/api/dogDetail/:id').put(dogDetail.updateDogDetail);
    app.route('/api/dogDetail/:id').delete(dogDetail.removeDogDetail);

    app.route('/api/dogDetail/user/:id').get(dogDetail.getDogDetailByUser);

};
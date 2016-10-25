'use strict';

var _ = require('lodash'),
	mongoose = require('mongoose'),
	DogDetail = mongoose.model('DogDetail');

//For Handle Errors
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}


exports.saveDogDetail = function (req, res) {
    var dogDetail = new DogDetail(req.body);
    dogDetail.save(function (err, result) {
        if (err) {
            handleError(res, err.message, 'Error in making dogDetail', 500);
        } else {
            res.json(result);
        }
    });
};

exports.getDogDetail = function (req, res) {
    var id = req.params.id;
    DogDetail.findOne({ _id: id }, function (err, result) {
        if (err) {
            handleError(res, err.message, 'Error in getting dogDetail', 500);
        }
        else {
            res.json(result);
        }
    });
};

exports.getDogDetailList = function (req, res) {
    var id = req.params.id;
    DogDetail.find({})
    .populate('userId')
   .exec(function (error, result) {
       if (error) {
           handleError(res, error.message, 'Error in getting dogDetail', 500);
       }
       else {
           res.json(result);
       }
   });
};

exports.getDogDetailByUser = function (req, res) {
    var id = req.params.id;
    DogDetail.find({ userId: id }).populate('userId')
   .exec(function (error, result) {
       if (error) {
           handleError(res, error.message, 'Error in getting dogDetail', 500);
       }
       else {
           res.json(result);
       }
   });
};

exports.updateDogDetail = function (req, res) {
    var id = req.params.id;
    DogDetail.update({ _id: id }, { $set: req.body }, function (err, result) {
        if (err) {
            handleError(res, err.message, 'Error in updating dogDetail', 500);
        }
        else {
            res.json(result);
        }
    });
};

exports.removeDogDetail = function (req, res) {
    var id = req.params.id;
    DogDetail.remove({ _id: id }, function (err, result) {
        if (err) {
            handleError(res, err.message, 'Error in deleting dogDetail', 500);
        }
        else {
            res.json(result);
        }
    });
};
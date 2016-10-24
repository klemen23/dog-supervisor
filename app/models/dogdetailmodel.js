'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var DogDetailSchema = new Schema({
    feeding: {
        amount: {
            type: String,
            trim: true,
            default: '',
            required: 'Please enter feed amount',
        },
        time: {
            type: String,
            trim: true,
            default: '',
            required: 'Please enter feed time',
        },
    },
    walks: {
        length: {
            type: String,
            trim: true,
            default: '',
            required: 'Please enter walks length',
        },
        time: {
            type: String,
            trim: true,
            default: '',
            required: 'Please enter feed time',
        },
    },
    message : {
        type: String,
        trim: true
    },
    userId: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    updated: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    }
});


mongoose.model('DogDetail', DogDetailSchema);
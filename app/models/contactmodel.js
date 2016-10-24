'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ContactSchema = new Schema({

    name: {
        type: String,
        trim: true,
        default: '',
        required: 'Please enter name',
    },
    email: {
        type: String,
        trim: true,
        default: '',
        required: 'Please enter email',
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    subject: {
        type: String,
        trim: true,
        default: '',
        required: 'Please enter subject',
    },

    message: {
        type: String,
        trim: true,
        default: '',
        required: 'Please enter message',
    },
    updated: {
        type: Date,
        default: Date.now
    },
    created: {
        type: Date,
        default: Date.now
    }
});


mongoose.model('Contact', ContactSchema);
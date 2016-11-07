'use strict';
var _ = require('lodash'),
	glob = require('glob');
module.exports = {
    app: {
        title: 'doghotel',
        description: 'doghotel',
        keywords: 'doghotel'
    },
    port: process.env.PORT || 3030,
    sessionSecret: 'doghotel',
    sessionCollection: 'sessions',
    // db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/doghotel',
    //  db: 'mongodb://testuser:testuser@ds021751.mlab.com:21751/dogreservation',
    db : 'mongodb://localhost/doghotel_new',
    mailer: {
        from: process.env.MAILER_FROM || 'MAILER_FROM',
        options: {
            service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
            auth: {
                user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
                pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
            }
        }
    }
};

module.exports.getGlobbedFiles = function (globPatterns, removeRoot) {
    // For context switching
    var _this = this;

    // URL paths regex
    var urlRegex = new RegExp('^(?:[a-z]+:)?\/\/', 'i');

    // The output array
    var output = [];

    // If glob pattern is array so we use each pattern in a recursive way, otherwise we use glob 
    if (_.isArray(globPatterns)) {
        globPatterns.forEach(function (globPattern) {
            output = _.union(output, _this.getGlobbedFiles(globPattern, removeRoot));
        });
    } else if (_.isString(globPatterns)) {
        if (urlRegex.test(globPatterns)) {
            output.push(globPatterns);
        } else {
            glob(globPatterns, {
                sync: true
            }, function (err, files) {
                if (removeRoot) {
                    files = files.map(function (file) {
                        return file.replace(removeRoot, '');
                    });
                }

                output = _.union(output, files);
            });
        }
    }

    return output;
};


/**
 * Get the modules JavaScript files
 */
module.exports.getJavaScriptAssets = function (includeTests) {
    var output = this.getGlobbedFiles(this.assets.lib.js.concat(this.assets.js), 'public/');

    // To include tests
    if (includeTests) {
        output = _.union(output, this.getGlobbedFiles(this.assets.tests));
    }

    return output;
};

/**
 * Get the modules CSS files
 */
module.exports.getCSSAssets = function () {
    var output = this.getGlobbedFiles(this.assets.lib.css.concat(this.assets.css), 'public/');
    return output;
};
'use strict';

var nscabinet = require('nscabinet'),
    gutil = require('gulp-util'),
    PluginError = gutil.PluginError;

// file can be a vinyl file object or a string
// when a string it will construct a new one
module.exports = function(type, opt) {
    if (!type) {
        throw new PluginError('gulp-nscabinet', 'Missing type option for gulp-nscabinet');
    }
    opt = opt || {};

    if (type === 'download') {
        return nscabinet.download(opt);
    } else {
        return nscabinet(opt);
    }
};
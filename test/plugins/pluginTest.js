'use strict';

exports.register = function (server, options, next) {

    server.expose('hello', options.who || 'world');
    next();
};

exports.register.attributes = {
    name: 'pluginTest',
    multiple: false
};

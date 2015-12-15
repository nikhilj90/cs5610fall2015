"use strict";
module.exports = function(app, mongoose, db, passport, localStrategy) {
    var userModel = require('./models/user.model.server.js')(mongoose, db, localStrategy);
    var userService = require('./services/user.service.server.js')(app, userModel);
    require('./services/search.service.server.js')(app);
};
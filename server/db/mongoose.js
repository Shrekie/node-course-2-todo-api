var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //set promise library to global
mongoose.connect('mongodb://testaccountdb:testaccountdb123@ds149132.mlab.com:49132/todoapp-shrek');

module.exports = {mongoose};

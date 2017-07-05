var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //set promise library to global
mongoose.connect(process.env.dbURI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};

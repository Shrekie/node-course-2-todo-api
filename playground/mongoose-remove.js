const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}) to remove everything

// Todo.remove({}).then((result)=>{
// 	console.log(result);
// });

// Todo.findOneAndRemove().then((result)=>{

// });

Todo.findByIdAndRemove('595d33ccebe06e4691a071ce').then((todo)=>{
	console.log(todo);
});
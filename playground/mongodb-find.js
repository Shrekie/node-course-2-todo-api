// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').find().count().then((count)=>{
	// console.log(`Todos: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	db.collection('Users').find({name:'Thomas Lindauer'})
	.toArray().then((doc) => {
		console.log(doc);
	}, (err) => {
		console.log('Unable to retrieve users ', err);
	});

	// db.close();
});
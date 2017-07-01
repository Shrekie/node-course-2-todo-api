// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) =>{
	// 	console.log(result);
	// });

	// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) =>{
	// 	console.log(result);
	// });

	// db.collection('Todos').findOneAndDelete({completed:false}).then((result) =>{
	// 	console.log(result)
	// })

	db.collection('Users').deleteMany({name:'Thomas Lindauer'}).then((result) =>{
		console.log(result)
	})

	db.collection('Users').findOneAndDelete({_id: new ObjectID('595732425b3cf70dfcdbb61b')}).then((result) =>{
		console.log(result)
	})


	// db.close();
});
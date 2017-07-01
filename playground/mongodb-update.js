// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5957bd5c9822d5093ad4d0a1')
	// },{
	// 	$set:{
	// 		completed:true
	// 	}
	// },
	// {
	// 	// return element with changed properties
	// 	returnOriginal: false

	// }).then((result) =>{
	// 	console.log(result);
	// });

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5957bd5c9822d5093ad4d0a1')
	// },{
	// 	$set:{
	// 		completed:true
	// 	}
	// },
	// {
	// 	// return element with changed properties
	// 	returnOriginal: false
	// }).then((result) =>{
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('595733f72159a41c1063dcc1')
	},{
		$set:{
			name:'Daniel'
		},
		$inc:{
			age:1
		}
	},
	{
		// return element with changed properties
		returnOriginal: false
	}).then((result) =>{
		console.log(result);
	});

	// db.close();
});
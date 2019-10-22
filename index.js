const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');

//Setting up express application
const app = express();

/*------------------------- MongoDB Settings START-----------------------------*/ 
// mongoose.connect('mongodb://localhost/ninjago',
// { useNewUrlParser: true,
//    useUnifiedTopology: true }
// ).then(() => console.log('DB Connected')); //We want to connect to database named 'ninjago' , although it is not yet created mongoose will create it for us .

// mongoose.connection.on('error', err => {
//   console.log(`DB Connection Error: ${err.message}`);
// }); //Handling if any error comes. 

//Found a new Way 
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://skumar:kumar1997@node-api-ulijp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { 
	useNewUrlParser: true, 
	useUnifiedTopology: true
 });
console.log('DB Connected...');
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

/*------------------------- MongoDB Settings END-----------------------------*/ 

mongoose.Promise = global.Promise; //We are overwriting mongoose promise becuase it was deprecated .

// Middleware placing is really Important , the Order is Important !
app.use(express.static('public'));

//This is a Middleware
app.use(bodyParser.json());

//Telling our Express Application to use the routes or Initializing the Routes. Also a Middleware.
app.use('/api',require('./routes/api')); // We are requiring and using routes of /api.

//Error Handling Middleware
app.use(function(err, req, res, next){
	// console.log(err);
	res.status(422).send({error: err.message});
});

//Listen for Request
app.listen(process.env.port || 4000, function(){

console.log("Listening for Requests");

});

var express = require('express');
var app = express();
const mongoose=require("mongoose");


const router=express.Router();
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
	
var message='Hello from server';
  res.render('pages/index', {message, message});
//  res.render('pages/index.ejs', {data:currentShowInformation});
 
});



// Show page
app.get('/showpage', function(req, res) {
  res.render("pages/ShowPage");
});

//adding images to node.js express system
app.use( express.static("img"));

//adding css files for express
app.use(express.static("css"));

mongoose.Promise=global.Promise;


mongoose.connect("mongodb://localhost:27017", { useUnifiedTopology: true })
require('./routes.js');


var findInformation=function(db)
{
var currentShowCollection=db.collection('currentShowInformation')
console.log(currentShowCollection);
res.render('currentShowInformation');
}

router.get('/', function(req, res) {
	res.render('C:\Anudeep\GMU classes\SWE 432\Iteration 5\views\pages\index.ejs', {
	currentShowInformation: data
	});
	res.render('currentShowInformation', {data: name})
});

router.get('/', (request, response) => {
	return response.render("C:\Anudeep\GMU classes\SWE 432\Iteration 5\views\pages\index.ejs");
});	

router.get('/logout', function(req, res, db){
	console.log("You have been logged out as requested");
	db=db.getSiblingDB('currentShowInformation');
	db.logout();
	db=db.getSiblingDB('Song')
	db.logout();
	db=db.getSiblingDB('Songs');
	db.logout();
});
/*
db.users.insertMany([
{
  "name": "One Song",
  "artist": "A artist",
  "duration": 2.25,
  "genre": "Rock"
},
{
  "name": "Another song",
  "artist": "Other artist",
  "duration": 1.25,
  "genre": "Jazz"
},
{
  "name": "qwerty song",
  "artist": "First Keyboard",
  "duration": 3.5,
  "genre": "Country"
},
{
  "name": "asdfghjkl song",
  "artist": "Some artist",
  "duration": 2,
  "genre": "Classical"
},
{
  "name": "Over the Horizon",
  "artist": "Samsung",
  "duration": 0.25,
  "genre": "Other"
}
]);
res.render("users");
*/
app.listen(8080);
console.log('Server is listening on port 8080');

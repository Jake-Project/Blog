//Getting express and mongoose before setting up the server with 'app ='
const express = require('express')
const mongoose = require('mongoose')
const app = express()
var cors = require('cors')

//Creation of the registration schema.
//This holds details for the login for a user
var registrationSchema = new mongoose.Schema({
    username: 'string',
    password: 'string',
    email: 'string'
});

//Creation of the blogpost schema
//This holds details for the blogposts
var blogpostSchema = new mongoose.Schema({
    title: 'string',
    content: 'string'
});

//Use the schema to define our model
//The database will make a 'registrations' collection from this model.
var RegistrationModel = mongoose.model('registration', registrationSchema);

//Use the schema to define our model
//The database will make a 'blogpost' collection from this model.
var BlogpostModel = mongoose.model('blogpost', blogpostSchema);

const db = {
"blogposts" : [
    {
		"id": "-Kr_QaTAZAWRxE9AsZ8e",
      "content" : "The purpose of a tech startup is not to unpack an idea, rather to experiment, addressing a problem and creating an opportunity. The environment of startups is dynamic, unpredictable, forcing entrepreneurs to act quickly and learn faster, to find a market niche and acquire a repeatable and scalable sales process to find, win, keep and grow customers and generate revenue.",
      "title" : "Thoughts on tech startup development practices"
    },
    {
		"id": "-Kr_Qe_ojZjicP47qO8t",
      "content" : "Start-ups are unique because of their ability to scale fast, and typically go through three stages – traction, transition and growth. Each of these stages requires different priorities that are reflected in different objectives, strategies, team etc.  In the early stages of your startup, you’ll have to manage so many tasks that you’ll often be overwhelmed with what needs to get done. But instead of being paralysed by what appears like an endless amount of work, know that you really only have one goal: traction.",
      "title" : "The vital signs of growth: startup metrics"
    },
    {
 		"id": "-Kr_Qj0vDQ6L18Sb5Hlq",
      "content" : "Start-ups are unique because of their ability to scale fast, and typically go through three stages – traction, transition and growth. Each of these stages requires different priorities that are reflected in different objectives, strategies, team etc.  In the early stages of your startup, you’ll have to manage so many tasks that you’ll often be overwhelmed with what needs to get done. But instead of being paralysed by what appears like an endless amount of work, know that you really only have one goal: traction.",
      "title" : "The vital signs of growth: startup metrics"
    }
  ]
}

//Allow app to use CORS. Important for transferring JSON files.
app.use(cors())

//Set appropriate headers for server
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested0With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

//Tell mongoose to connect to MongoDB instance and look for ember data.
//If no database exists, it will create one for us.
mongoose.connect('mongodb://localhost/emberData');

app.get('/', function (req, res) {
    //res.send('Hello World!')
    res.send('hello')
})

//New lines???
app.get('/api/', function(req,res){
    res.send('working');
});

//route to get all of the registrations
app.get('/api/registrations', function(req,res){
    RegistrationModel.find({}, function(err,docs){
        if(err){
            res.send({error:res});
        }
        else {
            //Where registration is name of model we will create in ember
            //Docs is array of the returned document
            res.send({registration:docs});
        }
    });
});

//Add some more stuff to this
app.post('/api/blogposts', function(req,res){
    if(err){
        res.send({error:res});
      }
      else{
    var title =req.body.title;
    var content = req.body.content;
    console.log("title = " + title + ", content = " + content);
    res.end("yes");
  }
});

app.get('/blogposts', function(req, res){
    res.send(db)
})
app.listen('3000');

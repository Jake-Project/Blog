const express = require('express')
const app = express()
var cors = require('cors')
//var cars = ["Saab", "Volvo", "BMW"];
var blogposts = ["hey", "help", "what am i doing"];

const db1 = [
     {
         id: '-Kr_QaTAZAWRxE9AsZ8e',
         title: 'New title',
         content: 'some random content'
     }
]

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

app.use(cors())

app.get('/', function (req, res) {
    //res.send('Hello World!')
    res.send('hello')
})

app.get('/blogposts', function(req, res){
    res.send(db)
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

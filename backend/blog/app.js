const express = require('express')
const app = express()
var cars = ["Saab", "Volvo", "BMW"];

app.get('/', function (req, res) {
    //res.send('Hello World!')
    res.send(cars[1])
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

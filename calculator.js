const express = require('express');
const bodyParsar= require("body-parser")
const app = express();
app.use(bodyParsar.urlencoded({extended: true}));
// res.sendFile for bigger inputs
app.get("/", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});
// to get data from index use npm install body parser req.body.nameattribute
app.post("/", function(req, res){
  var w = Number(req.body.weight);
  var h = Number(req.body.height);
  var result = w / (h*h);
  res.send("The result of this calculation is" + " " + result);
});

app.listen(3000, function(){
  console.log("Listening to server 3000");
});

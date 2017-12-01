var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require('fs');
var app = express();
var PORT = process.env.PORT || 3000;;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/home.html"));
  console.log("this is working")

});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "/tables.html"));
  console.log("this is working")

});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "/reserve.html"));
  console.log("this is working")

});

var people = [

// {
// name: "Ben",
// phone: "123",
// email: "hi",
// id: 1
// },

// {
// name: "Andrew",
// phone: "123",
// email: "hi",
// id: 1
// },

// {
// name: "Veronica",
// phone: "123",
// email: "hi",
// id: 1
// },

// {
// name: "Martha",
// phone: "123",
// email: "hi",
// id: 1
// },

// {
// name: "Luis",
// phone: "123",
// email: "hi",
// id: 1
// },

// {
// name: "Diana",
// phone: "123",
// email: "hi",
// id: 1
// },

// {

// name: "Patrick",
// phone: "123",
// email: "hi",
// id: 1
// },

// {
// name: "Jesus",
// phone: "123",
// email: "hi",
// id: 1
// }


]

app.post("/", function(req, res) {

var newPerson = req.body;
 people.push(newPerson);

});

app.post("/api/tables", function(req, res) {

var reservations = [];


for (var i = 0; i <5 ; i++) {

reservations.push(people[i]);


}

	console.log("You were add to a table");
	console.log(reservations);
	res.json(reservations);

})


app.post("/api/waitlist", function(req, res) {

	var waitlist = [];
	for (var i = 5; i < people.length ; i++) {

	waitlist.push(people[i]);
	

}

console.log("You were add to the waitlist");
console.log(waitlist);
res.json(waitlist);

})


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
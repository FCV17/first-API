var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients [
	{
		"id":"5726364",
		"text": "eggs"	
	},
	{   "id":"385955",
		"text": "milk"
	},
	{	"id":"43535",
		"text": "bacon"
	},
	{	
		"id":"9835354",
		"text": "frog legs"
	}
];

app.get('/', function (req, res){
	res.send(ingredients);
});


app.get('/funions', function(req, res) {
	res.send("give me my funions foo!");
});


app.listen(3000, function() {
	console.log("First API running on port 3000!");
});
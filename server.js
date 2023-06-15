var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
	{
		"id":"5726364",
		"text": "eggs"	
	},
	{       "id":"385955",
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

app.get('/ingredients', function(req, res){
	res.send(ingredients);
});


app.get('/funions', function(req, res) {
	res.send("give me my funions foo!");
});

app.post('/ingredients', function(req, res){
	var ingredient = req.body;
	if (!ingredient || ingredient.text === "") {
		res.status(500).send({error:" ingredient must be text"});
	} else {
		ingredients.push(ingredient);
		res.status(200).send(ingredients);
	}
});

app.put('/ingredients/:ingredientId', function(req, res){
	
	var ingredientId = req.params.ingredientId;
	var newText = req.body.text;
	
	if (!newText || newText=== ""){
		res.status(500).send({error:"must input text"})
	} else {
		for (var x = 0; x < ingredients.length; x++) {	
			var ing = ingredients[x];
			
			if (ing.id === request.params.ingredientId){
				ingredients[x].text = newText;
				objectFound = true;
				break;
			}
		}
		res.send(ingredients);
	}
});

app.listen(3000, function() {
	console.log("First API running on port 3000!");
});




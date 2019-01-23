var express = require('express'); 
var app = express();
const PORT = process.env.PORT || 8080;

var buecher = [
{autor: "Winston Schilling",titel: "Sakrileg",	Beschreibung: "Das beste Buch überhaupt!" },
{autor: "Paul Beier",titel: "Roman",	Beschreibung: "Der beste Roman überhaupt!"},
{autor: "Max Schwerdtner", titel: "Java-Kochbuch",	Beschreibung: "Das beste Buch zum kochen mit java überhaupt!"}
];

app.set("viewengine", "ejs");
app.get("/",function(req,res){
res.render("buecher.ejs", {buecher}); });
 
app.use(function(request, response) {  // Fehlerbehandlung 
response.status(404).send("Seite nicht gefunden");
}); 
var server = app.listen(PORT, function () {
   var host = server.address().address
   var port = server.address().port
      console.log("Example app listening at http://%s:%s", host, port)
}); 

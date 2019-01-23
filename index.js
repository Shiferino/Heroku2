var express = require('express'); 
var app = express();
const PORT = process.env.PORT || 8080;

var buecher = [
{autor: "Max Schwerdtner",titel: "PHP-Kochbuch",	Beschreibung: "Das beste Buch zum kochen mit php überhaupt!" },
{autor: "Marvin Spath",titel: "HTML-Kochbuch",	Beschreibung: "Das beste Buch zum kochen mit html überhaupt!"},
{autor: "Winston Schilling", titel: "Java-Kochbuch",	Beschreibung: "Das beste Buch zum kochen mit java überhaupt!"}
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
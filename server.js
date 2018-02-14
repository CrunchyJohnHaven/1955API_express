// Assignment: 1955 API - build a simple API server and communicate with it directly over URL request
// - All requests as 'get'
// -get '/' ->_ serve up the full collection of people born in 1955
// - get '/new/name/' -> add a name into the db 
//     - localhost:8000/new/First Last'
// - get '/remove/:name/' -> delete name from db
// - get '/:name/' -> brings up document of that particular person 
// - write responses as res.json()


// Fetch data from an api ->
// <script> 
//     $(document).ready(function(){
//         $.get("https://pokeapi.co/api/v2/pokemon/4/", function(data){
//             console.log("Received data from API", data);
//             var mypokemon = data.name;
//         })
//     })
// </script>

// Change Node server into an API that serves JSON data ->
// configure body-parser to read JSON -> 
// app.use(bodyParser.json());

// respond with JSON ->

// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.get('/', function(req,res){
//     X.find({}, function(err,xs){
//         if(err){
//             console.log('returned error', err);
//             res.json({message:"ERROR", error:err});
//         } else {
//             res.json({message: "Success", data:quotes});
//         }
//     });
// });

var express = require('express');
app = express();
bodyparser = require('body-parser');
path = require('path');
session = require('express-session');
port = 8000;

app.use(express.static(path.join(__dirname,'/client')));
app.use(bodyparser.json());
app.use(session({secret: "secret key"}));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, function(){
    console.log('API1955 listening on port 8000');
});
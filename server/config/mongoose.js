var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
var models = path.join(__dirname, './../models');
mongoose.connect('mongodb://localhost/1955_API');
fs.readdirSync(models).forEach(function(file){
    if(file.indexOf('.js')>=0){
        require(models + '/' + file);
    }
});
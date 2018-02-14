//create our schema for each file
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
UserSchema = new Schema({
    name:String
});
mongoose.model('User', UserSchema);
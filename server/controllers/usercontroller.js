var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
    showAll:function(req,res){
        User.find({}, function(err,users){
            if(err){
                res.json(err);
             } else {
                res.json(users);
            }
        });
    },
    show_one:function(req,res){
        console.log('show_one', req.params);
        User.findOne({name:req.params.username}, function(err,user){
            if (err){
                res.json(err);
            } else {
                res.json(user);
            }
        });
    },
    create:function(req,res){
        console.log('create', req.params);
        User.create({name:req.params.username}, function(err,user){
            if(err){
                res.json(err);
            } else {
                res.redirect('/');
            }
        });
    },
    remove:function(req,res){
        console.log('create', req.params);
        User.remove({name:req.params.username}, function(err,removeuser){
            if(err){
                res.json(err);
            } else {
                res.json(removeuser);
            }
        });
    },
};     
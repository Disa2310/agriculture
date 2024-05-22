var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    image:{
        type:String
    },
    city:{
        type:String
    },
    address:{
        type:String
    },
});

module.exports = mongoose.model("user_reg",userschema);
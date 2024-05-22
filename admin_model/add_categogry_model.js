var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    cat_name:{
        type:String
    },
    image:{
        type:String
    },
});

module.exports = mongoose.model("add_category",userschema);
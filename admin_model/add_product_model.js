var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    p_name:{
        type:String
    },
    p_discription:{
        type:String
    },
    p_image:{
        type:String
    },
    p_price:{
        type:String
    },
    p_discount:{
        type:String
    },
    p_category:{
        type:String
    },
});

module.exports = mongoose.model("add_product",userschema);
var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    name:{
        type:String
    },
    p_name:{
        type:String
    },
    quantity:{
        type:String
    },
    mobile_no:{
        type:String
    },
    price:{
        type:String
    },
    delivery_address:{
        type:String
    },
   
    
    
  
});

module.exports = mongoose.model("user_place_order",userschema);
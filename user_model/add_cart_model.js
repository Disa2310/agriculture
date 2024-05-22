var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
   
    p_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "add_product"
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user_user"
    },
    p_qty:{
        type:String
    },
    total:{
        type:String
    },
    order:{
        type:String
    },
    discount:{     
        type:String
    }


    
    
});

module.exports = mongoose.model("add_cart",userschema);
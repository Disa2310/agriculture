var add_cart = require('../user_model/add_cart_model');
var add_product = require('../admin_model/add_product_model');

const storage = require('node-persist');
storage.init( /* options ... */ );



exports.insert = async (req,res) => {

    var p_id = req.params.p_id;
    const userId = await storage.getItem("user_id")
    req.body.p_qty = 1;
    req.body.user_id = userId;
    req.body.p_id = p_id;

    

    var data = await add_cart.find({"p_id":p_id,"user_id":userId});
    
  
    if(data.length!=0)
    {
        var p_qty = parseInt(data[0].p_qty);
        req.body.p_qty = ++p_qty;
        
        var product_price = await add_product.findById(p_id)
        var total = product_price.p_price * req.body.p_qty
        req.body.total = total;
        
        var product_price = await add_product.findById(p_id)
        var discount = (total  * product_price.p_discount )/100
        req.body.discount = discount;

        var data = await add_cart.findByIdAndUpdate(data[0].id,req.body);
    }else{

        var product_price = await add_product.findById(p_id)
        var total = product_price.p_price * req.body.p_qty
        req.body.total = total;
        
        var product_price = await add_product.findById(p_id)
        var discount = (total  * product_price.p_discount )/100
        req.body.discount = discount;

        var data = await add_cart.create(req.body);
        
    }
    res.status(200).json({
        status:"Add Cart",
        data
    })
}

exports.get_data = async (req,res) => {

    var data = await add_cart.find().populate("p_id").populate("user_id");

    res.status(200).json({
        status:"data select",
        data
    })
}

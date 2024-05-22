var order_status = require('../user_model/add_cart_model');



exports.view_order = async (req,res) => {
    
     var order = req.params.order;

    var data = await order_status.find({"order":order});

    res.status(200).json({
        status:"view order",
        data
    })
}
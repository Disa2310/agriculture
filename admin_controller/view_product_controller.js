var view_product = require('../admin_model/add_product_model');


exports.get_data = async (req,res) => {
    
    var data = await view_product.find(req.body);

    res.status(200).json({
        status:"data select",
        data
    })
}
exports.view_data = async (req,res) => {
    
     var p_name = req.params.p_name;

    var data = await view_product.find({"p_name":p_name});

    res.status(200).json({
        status:"data select",
        data
    })
}

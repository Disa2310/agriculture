var user_view_product = require('../admin_model/add_product_model');

exports.insert = async (req,res) => {
    var data = await user_view_product.create(req.body);

    res.status(200).json({
        status:"data insert",
        data
    })
}

exports.get_data = async (req,res) => {
    
    var data = await user_view_product.find(req.body);

    res.status(200).json({
        status:"data select",
        data
    })
}
exports.view_data = async (req,res) => {
    
     var p_name = req.params.p_name;

    var data = await user_view_product.find({"p_name":p_name});

    res.status(200).json({
        status:"data select",
        data
    })
}

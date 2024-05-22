var user_single_product = require('../admin_model/add_product_model');



exports.view_data = async (req,res) => {

    var id = req.params.id;

    var data = await user_single_product.findById(id,req.body);

    res.status(200).json({

        status:"data view",
        data
    })
}
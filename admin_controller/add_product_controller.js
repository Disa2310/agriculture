var add_product = require('../admin_model/add_product_model');



exports.insert = async (req,res) => {

    req.body.p_image = req.file.originalname;
    
    var data = await add_product.create(req.body);

    res.status(200).json({
        status:"data insert",
        data
    })
}
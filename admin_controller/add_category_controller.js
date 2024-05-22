var add_category = require('../admin_model/add_categogry_model');



exports.insert = async (req,res) => {

    req.body.image = req.file.originalname;

    var data = await add_category.create(req.body);

    res.status(200).json({
        status:"data insert",
        data
    })
}
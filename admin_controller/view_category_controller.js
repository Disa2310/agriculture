var view_category = require('../admin_model/add_categogry_model');


exports.get_data = async (req,res) => {
    var data = await view_category.find(req.body);

    res.status(200).json({
        status:"data select",
        data
    })
}
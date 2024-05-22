var place_order = require('../user_model/place_order_model');



exports.insert = async (req,res) => {
    var data = await place_order.create(req.body);

    res.status(200).json({
        status:"data insert",
        data
    })
}
exports.get_data = async (req,res) => {
    var data = await place_order.find(req.body);

    res.status(200).json({
        status:"data select",
        data
    })
}
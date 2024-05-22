var express = require('express');
var router = express.Router();
var multer = require('multer');
var user_reg = require('../user_controller/user_reg_controller');
var user_login = require('../user_controller/user_login_controller');
var user_view_product = require('../user_controller/user_view_product_controller');
var user_single_product = require ('../user_controller/user_view_single_controller');
var place_order = require ('../user_controller/place_order_controller');
var add_cart = require ('../user_controller/add_cart_controller');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })


// user register
router.post('/insert_user_reg',upload.single('image'),user_reg.insert);
router.get('/view_user_reg',user_reg.get_data);

// user login
router.post('/user_insert',user_login.insert);
router.get('/user_select',user_login.get_data);
router.post('/user_login',user_login.login);
router.get('/logout',user_login.logout);

//user view product
router.post('/user_view_insert',upload.single('p_image'),user_view_product.insert);
router.get('/user_view_product',user_view_product.get_data);

//user view single product

router.get('/user_single_product/:id',user_single_product.view_data);

//user place order
router.post('/insert_place_order',place_order.insert);
router.get('/place_order',place_order.get_data);

//user add cart order
router.get('/insert_add_cart/:p_id',add_cart.insert);
router.get('/get_cart',add_cart.get_data);

module.exports = router;

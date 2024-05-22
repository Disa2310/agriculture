var express = require('express');
var router = express.Router();
var multer = require('multer');
var adminlogin = require('../admin_controller/admin_controller');
var add_category = require('../admin_controller/add_category_controller');
var add_product = require('../admin_controller/add_product_controller');
var view_product = require('../admin_controller/view_product_controller');
var view_category = require('../admin_controller/view_category_controller');
var order_status = require('../admin_controller/order_controller');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })

/* GET home page. */


router.post('/admin_insert',adminlogin.insert);
router.get('/admin_select',adminlogin.get_data);

router.post('/login',adminlogin.login);
router.get('/logout',adminlogin.logout);

// add category

router.post('/insert_category',upload.single('image'),add_category.insert);


// add product
router.post('/insert_product',upload.single('p_image'),add_product.insert);


// view product
router.get('/view_product',view_product.get_data);

// view category
router.get('/view_category',view_category.get_data);

//search product
router.get('/search_product/:p_name',view_product.view_data);

//view order

router.get('/view_order/:order',order_status.view_order);
module.exports = router;

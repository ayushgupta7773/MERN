const router = require('express').Router();
const productController = require('../controller/productController.js');

router.post('/product', productController.createProduct);
router.get('/product', productController.getAllProduct);
router.get('/product/:status', productController.getProductByStatus);
router.get('/productbyqty/:qty', productController.getProductByQtyFilter);

module.exports = router;
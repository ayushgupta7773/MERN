const router = require('express').Router();
const cateGoryController = require('../controller/CategoryController');

router.post('/category', cateGoryController.createCategory);
router.get('/category', cateGoryController.getAllCategory);

module.exports = router;
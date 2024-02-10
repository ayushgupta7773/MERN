const router = require('express').Router();
const empController = require('../controller/EmployeeController');

router.get('/employee', empController.getAllEmp);
router.get('/employee/:id', empController.getById);
router.post('/employee', empController.createEmp);
router.delete('/employee/:id', empController.deleteEmp);
router.put('/employee/:id', empController.updateEmp);

module.exports = router;
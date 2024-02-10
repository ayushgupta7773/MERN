const routes = require('express').Router();
const controller = require('../controller/UserController.js');

routes.get('/users', controller.getAllUser);
routes.get('/users1', controller.getUsers);
routes.get('/getAllUsers', controller.getAllUserFromDB);
routes.get('/getById/:id', controller.getById);

routes.post('/createUser', controller.createUser);

routes.delete('/deleteUser/:id', controller.deleteUser);

routes.put('/updateUser/:id', controller.updateUser);

module.exports = routes;

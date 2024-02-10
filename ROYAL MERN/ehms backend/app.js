const express = require('express');
const app = express();
const PORT = 4000;

const mongoose = require('mongoose');

/* confi... */
app.use(express.json());

/* connect to mongodb database */
const db = mongoose.connect('mongodb://127.0.0.1:27017/ehms');
db.then(() => {
    console.log("Database is connected.");
}).catch(() => {
    console.log("Some error is occured.");
})

/* ------------------- Getting user routes and providing to server------------------- */

const user_routes = require('./routes/UserRoutes.js');
app.use('/users', user_routes);

/* ------------------- Getting employee routes and providing to server------------------- */

const emp_routes = require('./routes/EmployeeRoutes.js');
app.use('/employees', emp_routes);

/* ------------------- Getting category routes and providing to server------------------- */

const category_routes = require('./routes/CategoryRoutes.js');
app.use('/categories', category_routes);

/* ------------------- Getting category routes and providing to server------------------- */

const product_routes = require('./routes/ProductRoutes.js');
app.use('/products', product_routes);

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})
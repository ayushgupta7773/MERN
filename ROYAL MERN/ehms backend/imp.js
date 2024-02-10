const exp = require('./exp.js');

console.log(exp);
console.log(exp.a);
console.log(exp.b);

let stu = [
    {id: 1, name: 'Ram', std: 11},
    {id: 2, name: 'Shyam', std: 12},
    {id: 3, name: 'Shiv', std: 10},
    {id: 4, name: 'Krishna', std: 7},
    {id: 5, name: 'Maruti', std: 9}
]

app.get('/test', (req, res) => {
    res.send('Hello');
    // res.json(stu);
})

app.get('/users', (req, res) => {
    res.status(200).json({
        messgae: "users api called...",
        data: stu
    })
})

console.log("Import calssed.");
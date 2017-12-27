const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const operationCalc = require('./calc.js');
const port = 9999;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/calculation', function (req, res) {
    console.log(req.body);
    operationCalc.math(req.body);
    res.sendStatus(201);
})

app.get('/calculation', function (req, res) {
    res.send(operationCalc.calc);
})

app.listen(port, function () {
    console.log('server is up on:', port); 
})
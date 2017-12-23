const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 9999;
let multiplication;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/multiplication', function (req, res) {
    console.log('get it');
    res.send(multiplication);
})
// multiplication post data
app.post('/multiplication', function (req, res) {
    console.log(req.body);
    multiplication = req.body.x * req.body.y;
   console.log('the multiplication is equal to: ', multiplication); 
    res.sendStatus(201);
})


// addition post data
app.post('/addition', function (req, res) {
    console.log(req.body);
    let addition = Number(req.body.x) + Number(req.body.y);
    console.log('the addition is equal to: ', addition);
    res.sendStatus(201);
})
// subtraction post data 
app.post('/subtraction', function (req, res) {
    console.log(req.body);
    let subtraction = Number(req.body.x) - Number(req.body.y);
    console.log('the addition is equal to: ', subtraction);
    res.sendStatus(201);
})
// division post data
app.post('/division', function (req, res) {
    console.log(req.body);
    let division = req.body.x / req.body.y;
    console.log('the addition is equal to: ', division);
    res.sendStatus(201);
})
app.listen(port, function () {
    console.log('server is up on:', port); 
})
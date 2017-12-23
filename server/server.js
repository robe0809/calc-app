const express = require('express');
const app = express();
const bodyParser = ('body-parser');
const port = 9999;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));


app.listen(port, function () {
    console.log('server is up on:', port); 
})
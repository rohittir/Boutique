
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var port = 2000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Static page for angular client
app.use(express.static(path.join(__dirname, 'client')));

var routes = require('./app/route.js')(app);

app.get('/', function(req, res) {
    res.send('Boutique running...');
    next();
})

app.listen(port, function() {
    console.log('server started on port ' + port);
})

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = require('./src/routes');
var port    =   process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',router);

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!')
});

app.get('/isalive',function(req,res){res.json(true);});

var httpServer=app.listen(port, function () {
    console.log('listening on port '+port)
});

module.exports = httpServer;
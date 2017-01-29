var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var config = require('./config/config');
var apiRouter = require('./routes/api');
var app = express();

app.use(bodyParser.json());
app.use(morgan('combined'));
app.use('/api', apiRouter);

mongoose.connect(config.db.url);

app.listen(config.express.port, function() {
    console.log('app started at port ' + config.express.port);
});
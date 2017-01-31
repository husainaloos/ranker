const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const chalk = require('chalk');

const bodyParser = require('body-parser');
const config = require('./config/config');
const apiRouter = require('./routes/api');
const app = express();

app.use(bodyParser.json());
app.use(morgan('combined'));
app.use('/api', apiRouter);

mongoose.connect(config.db.url, function(err) {
    if (err) {
        chalk.red(err);
    } else {
        chalk.green('Connected to database successfully.');
    }
});

app.listen(config.express.port, function(err) {
    if (err) {
        chalk.red(err);
    } else {
        chalk.green('Starting application at port '
        + config.express.port + '.');
    }
});

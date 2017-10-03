var express = require('express');
var things = require('./first.js');
var app = express();

app.use('/things', things);
app.listen(3000);

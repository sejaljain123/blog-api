var express = require('express');
var database = require('./database');
var userRouter = require('./routes/users');
var app = express();
database.connect();
app.use(express.json());
app.use('/', userRouter);

app.listen(5000, () => {
  console.log('app is running');
});

module.exports = app;

const express = require('express');
const database = require('./database');
const userRouter = require('./routes/users');
const blogRouter = require('./routes/blog');
require('dotenv').config();
const app = express();

const start = async () => {
  await database.connect();
  app.use(express.json());
  app.use('/', userRouter);
  app.use('/blog', blogRouter);

  app.listen(5000, () => {
    console.log('app is running');
  });
};
start();

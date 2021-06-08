const express = require('express');
const database = require('./database');
const userRouter = require('./routes/users');
const blogRouter = require('./routes/blog');
const cors = require('cors');
require('dotenv').config();
const app = express();

const start = async () => {
  await database.connect();
  app.use(cors());
  app.use(express.json());
  app.use('/', userRouter);
  app.use('/blog', blogRouter);

  app.listen(process.env.PORT || 5000, () => {
    console.log(`app is running on port ${process.env.PORT}`);
  });
};
start();

var mongoose = require('mongoose');

const connect = async () => {
  try {
    return mongoose.connect(
      `mongodb+srv://sejal:sejal@blog.cq3hi.mongodb.net/blog?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      },
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Database connected');
        }
      }
    );
  } catch (err) {
    console.log(err);
    return;
  }
};
module.exports = {
  connect: connect,
};

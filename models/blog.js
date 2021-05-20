const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String },
  content: { type: String },
  description: { type: String },
  created_at: { type: Date, default: new Date() },
  created_by: { type: Schema.Types.ObjectID, ref: 'user' },
});

module.exports = mongoose.model('blog', blogSchema);

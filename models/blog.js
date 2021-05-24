const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  description: { type: String, required: true },
  created_at: { type: Date, default: new Date(), required: true },
  created_by: { type: Schema.Types.ObjectID, ref: 'user', required: true },
});

module.exports = mongoose.model('blog', blogSchema);

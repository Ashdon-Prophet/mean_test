var mongoose = require('mongoose');

var AnswerSchema = new mongoose.Schema({
  body: {type: String, required: true},
  author: {type: String, required: true},
  upvotes: {type: Number, default: 0},
  question: {type: mongoose.Schema.Types.ObjectId, ref: 'Question'}
});

mongoose.model('Answer', AnswerSchema);

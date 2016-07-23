var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
    _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: {type: String, required: true},
    description: {type: String},
    ansCount: {type: Number, default: 0},
    answers: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}
    ]
});

mongoose.model('Question', QuestionSchema);

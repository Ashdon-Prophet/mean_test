var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    answers: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}
    ],
    questions: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Question'}
    ]
});

mongoose.model('User', UserSchema);

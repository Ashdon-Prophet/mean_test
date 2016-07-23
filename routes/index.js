var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
require('./../models/Questions');
require('./../models/Answers');
require('./../models/Users');
var Question = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

/* GET home page */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.param('question', function(req, res, next, id) {
    var query = Question.findById(id);
    query.exec(function (err, question){
        if (err) {
            return next(err);
        }
        if (!question) {
            return next(new Error('can\'t find question'));
        }
        req.question = question;
        return next();
    });
});
/* GET all questions */
router.get('/questions', function(req, res, next) {
    Question.find(function(err, questions){
        if(err){
            return next(err);
        }
        res.json(questions);
    });
});
/* Making new questions */
router.post('/questions', function(req, res, next) {
    var question = new Question(req.body);
    question.save(function(err, question){
        if(err){
            return next(err);
        }
        res.json(question);
    });
});

module.exports = router;

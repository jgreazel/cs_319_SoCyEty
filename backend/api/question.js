const {Router} = require('express');
const Question = require('../app/question/question');
const QuestionTable = require('./../app/question/questionTable');

const router = new Router();

router.get('/all', (req, res)=>{
    QuestionTable.getAllQuestions()
        .then((rows)=>{
            res.json(rows);
        })
        .catch((error)=>{
            console.log(error);
        })
});

router.get('/new/:questionBody/:questionAuthor', (req, res)=>{
    let newQ = new Question({questionBody: req.params.questionBody, questionAuthor: req.params.questionAuthor});
    console.log('newQ', newQ);
    QuestionTable.storeQuestion(newQ)
        .then((rows)=>{
            res.json(rows);
        })
        .catch((err)=>{
            console.log(err)
        })
});

module.exports = router;
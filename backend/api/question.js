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
            error(error);
        })
});

// router.get('/new', (req, res)=>{

// });

module.exports = router;
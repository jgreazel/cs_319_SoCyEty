const {Router} = require('express');
const Question = require('../app/question/question');
const QuestionTable = require('./../app/question/questionTable');

const router = new Router();

//testing api -- not sure we'll need it if I handle comments by just adding them to a post
router.get('/all', (req, res)=>{
    // res.json(new Comment({author: 'Jon', commentBody: 'hello, good post'}))
    const questions = QuestionTable.getAllQuestions();
})

module.exports = router;
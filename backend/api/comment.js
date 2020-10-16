const {Router} = require('express');
const Comment = require('../app/comment');

const router = new Router();

//testing api
router.get('/new', (req, res)=>{
    res.json(new Comment({author: 'Jon', commentBody: 'hello, good post'}))
})

module.exports = router;
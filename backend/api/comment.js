const {Router} = require('express');
const Comment = require('../app/comment');

const router = new Router();

//testing api -- not sure we'll need it if I handle comments by just adding them to a post
router.get('/new', (req, res)=>{
    res.json(new Comment({author: 'Jon', commentBody: 'hello, good post'}))
})

module.exports = router;
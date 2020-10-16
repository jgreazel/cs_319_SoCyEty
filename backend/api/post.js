const { Router } = require('express');
const Post = require('../app/post');

const router = new Router();

// only for testing (hard coded example), will implement post method for creation and get to get multiple posts
router.get('/new', (req, res)=>{
    res.json(new Post({author: 'Jon', postBody: 'First Post'}));
});

module.exports = router;
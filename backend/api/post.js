const { Router } = require('express');
const Post = require('../app/post');
const DUMMY_DATA = require('../data/posts');

const router = new Router();

// only for testing (hard coded example), will implement post method for creation and get to get multiple posts
router.get('/all', (req, res)=>{
    res.json(DUMMY_DATA)
});

module.exports = router;
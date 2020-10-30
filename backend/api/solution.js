const { Router } = require('express');
// const Solution = require('../app/solution');
const DUMMY_DATA = require('../data/solutions');

const router = new Router();

// only for testing (hard coded example), will implement post method for creation and get to get multiple posts
router.get('/all', (req, res)=>{
    res.json(DUMMY_DATA)
});

module.exports = router;
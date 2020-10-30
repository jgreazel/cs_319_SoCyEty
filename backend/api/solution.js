const { Router } = require('express');
// const Solution = require('../app/solution');
const DUMMY_DATA = require('../data/solutions');
const SolutionTable = require('./../app/solution/solutionTable');

const router = new Router();

// only for testing (hard coded example), will implement post method for creation and get to get multiple posts
router.get('/dummy/all', (req, res)=>{
    res.json(DUMMY_DATA)
});

router.get('/:questionId', (req, res)=>{
    SolutionTable.getSolutionsForQ(req.params.questionId)
        .then((rows)=>{
            res.json(rows);
        })
        .catch((error)=>{
            error(error)
        })
})

module.exports = router;
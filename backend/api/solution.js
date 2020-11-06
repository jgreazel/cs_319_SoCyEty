const { Router } = require('express');
const Solution = require('../app/solution/solution');
const DUMMY_DATA = require('../data/solutions');
const SolutionTable = require('./../app/solution/solutionTable');

const router = new Router();

// only for early testing 
router.get('/dummy', (req, res)=>{
    res.json(DUMMY_DATA)
});

router.get('/all', (req, res)=>{
    SolutionTable.getAllSolutions()
        .then((rows)=>{
            res.json(rows);
        })
        .catch((error)=>{
            console.log(error);
        })
})

router.get('/:questionId', (req, res)=>{
    SolutionTable.getSolutionsForQ(req.params.questionId)
        .then((rows)=>{
            res.json(rows);
        })
        .catch((error)=>{
            error(error)
        })
})

router.get('/new/:solutionBody/:solutionAuthor/:questionId', (req, res)=>{
    let newSol = new Solution({
        solutionBody: req.params.solutionBody,
        solutionAuthor: req.params.solutionAuthor,
        questionId: req.params.questionId
    });
    console.log('newSol:', newSol);
    SolutionTable.storeSolution(newSol)
        .then((rows)=>{
            res.json(rows);
        })
        .catch((error)=>{
            console.log(error)
        })
})

module.exports = router;
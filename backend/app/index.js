const express = require('express');
const cors = require('cors');
const Solution = require('./solution/solution');
const Comment = require('./comment');
const solutionRouter = require('../api/solution');
const commentRouter = require('../api/comment');
const questionRouter = require('../api/question');

const app = express();

// may be 1234 or 5100 -- seems inconsistent 
app.use(cors({ origin: 'http://localhost:1234'}));
app.use('/solution', solutionRouter);
app.use('/comment', commentRouter);
app.use('/question', questionRouter);

module.exports = app;
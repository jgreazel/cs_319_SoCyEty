const express = require('express');
const cors = require('cors');
const Post = require('./post');
const Comment = require('./comment');
const postRouter = require('../api/post');
const commentRouter = require('../api/comment');

const app = express();

app.use(cors({ origin: 'http://localhost:5100'}));
app.use('/post', postRouter);
app.use('/comment', commentRouter);

module.exports = app;
const express = require('express');
const Post = require('./post');
const Comment = require('./comment');
const postRouter = require('../api/post');
const commentRouter = require('../api/comment');

const app = express();

app.use('/post', postRouter);
app.use('/comment', commentRouter);

module.exports = app;

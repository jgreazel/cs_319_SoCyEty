const express = require('express');
const Post = require('./post');
const Comment = require('./comment');
const postRouter = require('../api/post');
const commentRouter = require('../api/comment');

const app = express();

app.use('/post', postRouter);
app.use('/comment', commentRouter);

module.exports = app;

// test code for post and comment classes
// firstPost = new Post({
//     author: 'Jon', 
//     postBody: 'Hello World'})

// console.log('new post: ', firstPost);

// firstComment = new Comment({
//     author: 'Carter',
//     commentBody: 'Hello Son'
// });

// firstPost.addComment(firstComment);
// firstPost.addComment({
//     author: 'Nick',
//     commentBody: 'Hey, I thought you were MY dad'
// })

// console.log('Post with comments', firstPost);
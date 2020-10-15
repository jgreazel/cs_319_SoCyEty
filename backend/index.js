const Post = require('./post');
const Comment = require('./comment');

firstPost = new Post({
    author: 'Jon', 
    postBody: 'Hello World'})

console.log('new post: ', firstPost);

firstComment = new Comment({
    author: 'Carter',
    commentBody: 'Hello Son'
});

firstPost.addComment(firstComment);
firstPost.addComment({
    author: 'Nick',
    commentBody: 'Hey, I thought you were MY dad'
})

console.log('Post with comments', firstPost);
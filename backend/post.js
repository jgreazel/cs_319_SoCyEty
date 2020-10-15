const Comment = require('./comment');

const DEFAULT_PROPERTIES ={
    author: 'unknown',
    postBody: '',
    comments: [],
    datePosted: new Date()
}

class Post{
    constructor({author, postBody, comments, datePosted}){
        this.author = author || DEFAULT_PROPERTIES.author;
        this.postBody = postBody || DEFAULT_PROPERTIES.postBody;
        this.comments = comments || DEFAULT_PROPERTIES.comments;
        this.datePosted = datePosted || DEFAULT_PROPERTIES.datePosted;
    }

    addComment(comment){
        if(comment.commentBody === ''){
            throw new Error('Cannot leave empty comments!');
        }

        this.comments.push(new Comment({
            author: comment.author,
            commentBody: comment.commentBody,
            dateCommented: comment.dateCommented
        }));
    }
}
module.exports = Post;
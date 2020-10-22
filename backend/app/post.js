const Comment = require('./comment');

const DEFAULT_PROPERTIES = {
    postId: undefined,
    postAuthor: undefined,
    postBody: '',
    comments: [],
    datePosted: new Date()
}

class Post{
    constructor({postId, postAuthor, postBody, comments, datePosted}){
        this.postId = postId || DEFAULT_PROPERTIES.postId;
        this.postAuthor = postAuthor || DEFAULT_PROPERTIES.postAuthor;
        this.postBody = postBody || DEFAULT_PROPERTIES.postBody;
        this.comments = comments || DEFAULT_PROPERTIES.comments;
        this.datePosted = datePosted || DEFAULT_PROPERTIES.datePosted;
    }

    addComment(comment){
        if(comment.commentBody === ''){
            throw new Error('Cannot leave empty comments!');
        }

        this.comments.push(new Comment({
            commentAuthor: comment.commentAuthor,
            commentBody: comment.commentBody,
            dateCommented: comment.dateCommented
        }));
    }
}
module.exports = Post;
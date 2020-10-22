const DEFAULT_PROPERTIES = {
    commentId: undefined,
    commentAuthor: undefined,
    commentBody: '',
    dateCommented: new Date()
}

class Comment{
    constructor({commentId, commentAuthor, commentBody, dateCommented}){
        this.commentId = commentId || DEFAULT_PROPERTIES.commentId;
        this.commentAuthor = commentAuthor || DEFAULT_PROPERTIES.commentAuthor;
        this.commentBody = commentBody || DEFAULT_PROPERTIES.commentBody;
        this.dateCommented = dateCommented || DEFAULT_PROPERTIES.dateCommented;
    }
}
module.exports = Comment;  
const DEFAULT_PROPERTIES = {
    author: 'unknown',
    commentBody: '',
    dateCommented: new Date()
}

//TODO: implement ids
class Comment{
    constructor({author, commentBody, dateCommented}){
        this.author = author || DEFAULT_PROPERTIES.author;
        this.commentBody = commentBody || DEFAULT_PROPERTIES.commentBody;
        this.dateCommented = dateCommented || DEFAULT_PROPERTIES.dateCommented;
    }
}
module.exports = Comment;  
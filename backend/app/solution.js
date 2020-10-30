const DEFAULT_PROPERTIES = {
    solutionId: undefined,
    solutionAuthor: undefined,
    solutionBody: '',
    datePosted: new Date()
}

class Solution{
    constructor({solutionId, solutionAuthor, solutionBody, datePosted}){
        this.solutionId = solutionId || DEFAULT_PROPERTIES.solutionId;
        this.solutionAuthor = solutionAuthor || DEFAULT_PROPERTIES.solutionAuthor;
        this.solutionBody = solutionBody || DEFAULT_PROPERTIES.solutionBody;
        this.datePosted = datePosted || DEFAULT_PROPERTIES.datePosted;
    }
}
module.exports = Solution;
import React, {Component} from 'react';

class Solution extends Component {

    render(){
        const { solutionId, solutionAuthor, solutionBody, datePosted, questionId} = this.props.data;
        const displayDate = new Date(datePosted);
        return(
        <div key={solutionId} className='card'>
            <h4>{solutionAuthor}</h4>
            <p>{displayDate.getMonth() + '/' + displayDate.getDate() + '/' + displayDate.getFullYear()}</p>
            <p>{solutionBody}</p>
        </div>
        )
    }
}
export default Solution;
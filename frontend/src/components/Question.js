import React, {Component} from 'react';

class Question extends Component {

    render(){
        const { questionId, questionAuthor, dateAsked, questionBody} = this.props.data;
        const displayDate = new Date(dateAsked);
        return(
        <div key={questionId} className='card'>
            <h4>{questionAuthor}</h4>
            <p>{displayDate.getMonth() + '/' + displayDate.getDate() + '/' + displayDate.getFullYear()}</p>
            <p>{questionBody}</p>
        </div>
        )
    }
}
export default Question;
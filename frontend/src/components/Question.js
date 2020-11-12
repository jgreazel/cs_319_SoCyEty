import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class Question extends Component {

    render(){
        const { id, questionAuthor, dateAsked, questionBody} = this.props.data;
        const displayDate = new Date(dateAsked);
        return(
        <div className='card'>
            <h3>{questionBody}</h3>
            <Button className="submitButton" onClick={()=>console.log(id)}>See Details</Button>
            <p><strong>{questionAuthor}</strong>{' asked on:' + displayDate.getMonth() + '/' + displayDate.getDate() + '/' + displayDate.getFullYear()}</p>
            
        </div>
        )
    }
}
export default Question;
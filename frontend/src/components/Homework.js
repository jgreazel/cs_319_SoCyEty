import React, {Component} from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import {fetchAllQuestions} from '../actions/question';
import QuestionForm from './QuestionForm';

class Homework extends Component {
    
    // state={
    //     questionBody: ''
    // }

    componentDidMount(){
        this.fetchAllQs();
    }

    fetchAllQs=()=>{
        this.props.fetchAllQuestions();
    }

    // handleEvent = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    // submitQuestion = () =>{
    //     const {questionBody} = this.state;
    //     fetch(`http://localhost:3000/question/new/${questionBody}/${this.props.author}`)
    //     this.props.fetchAll();
    // }

    render() {
        // const { questionBody} = this.state;
        const {question} = this.props;
        
        return (
            <div>
            <div className="column"> 
                {/* <br></br>
                 <form>
                    <textarea
                        required
                        id="questionBody"
                        value={questionBody}
                        name="questionBody"
                        placeholder="Ask question here!"
                        onChange={this.handleEvent}
                    />
                </form>
                <button
                    onClick={this.submitQuestion}
                    type="submit"
                >
                   Ask!
                </button> */}
                <h2 className="homework_heading">Homework assignments and questions</h2>
                {question.question && question.question.reverse().map(q => 
                    <Question key={q.id} data={q}/>
                )}
                {/* {console.log('props', this.props)} */}
            </div>
            <div ><QuestionForm/></div>
            </div>
        );
    }
}
export default connect(
    ({question})=>({question}), 
    {fetchAllQuestions}
)(Homework);
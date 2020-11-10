import React from 'react';
import Question from './Question'

class Homework extends React.Component {
    
    state={
        questionBody: ''
    }

    handleEvent = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitQuestion = () =>{
        const {questionBody} = this.state;
        fetch(`http://localhost:3000/question/new/${questionBody}/${this.props.author}`)
        this.props.fetchAll();
    }

    render() {
        const { questionBody} = this.state;
        return (
            <div class="column"> 
                <br></br>
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
                </button>
                <h2 class="homework_heading">Homework assignments and questions</h2>
                {this.props.questions.map(question => 
                    <Question data={question}></Question>
                )}
            </div>
        );
    }
}
export default Homework;
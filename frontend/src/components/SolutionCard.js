import React from 'react';
import Solution from './Solution'

class SolutionCard extends React.Component {
    
    state={
        solutionBody: ''
    }

    handleEvent = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitSolution = () =>{
        const {solutionBody} = this.state;
        fetch(`http://localhost:3000/solution/new/${solutionBody}/${this.props.author}/1`)
        this.props.fetchAll();
    }

    render() {
        const { solutionBody} = this.state;
        return (
            <div class="column_middle"> 
                <br></br>
                 <form>
                    <textarea
                        required
                        id="solutionBody"
                        value={solutionBody}
                        name="solutionBody"
                        placeholder="Answer question here!"
                        onChange={this.handleEvent}
                    />
                </form>
                <button
                    onClick={this.submitSolution}
                    type="submit"
                >
                   Answer!
                </button>
                <h2 class="solution_heading">Solutions</h2>
                {this.props.solutions.map(solution => 
                    <Solution data={solution}></Solution>
                )}
            </div>
        );
    }
}
export default SolutionCard;
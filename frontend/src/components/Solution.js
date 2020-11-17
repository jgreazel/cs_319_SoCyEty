import React from 'react';
import {connect} from 'react-redux';
import {fetchSolutionByQuestionId} from '../actions/solution';
import SolutionCard from './SolutionCard';

class Solution extends React.Component {

    componentDidMount(){
        this.fetchSolutions();
    }

    fetchSolutions=()=>{
        this.props.fetchSolutionByQuestionId({id: this.props.id});
    }

    render() {
        const {solution} = this.props;

        return (
            //must fetch all solutions by qId (in url). will require solution reducer/actions 
            // submitting new solution will require change to api and solutionTable to take from body not url
            <div >  
                <h2 className="posts_heading">Question Solutions:</h2>
                {solution.solution && solution.solution.map(s => 
                    <SolutionCard key={s.id} data={s} />
                )}
            </div>
        );
    }
// class Solution extends Component {

//     render(){
//         const { solutionId, solutionAuthor, solutionBody, datePosted, questionId} = this.props.data;
//         const displayDate = new Date(datePosted);
//         return(
//         <div key={solutionId} className='card'>
//             <h4>{solutionAuthor}</h4>
//             <p>{displayDate.getMonth() + '/' + displayDate.getDate() + '/' + displayDate.getFullYear()}</p>
//             <p>{solutionBody}</p>
//         </div>
//         )
//     }
}
export default connect(
    ({solution})=>({solution}),
    {fetchSolutionByQuestionId}
)(Solution);
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
            <div >  
                <h2 className="posts_heading">Question Solutions:</h2>
                {solution.solution && solution.solution.map(s => 
                    <SolutionCard key={s.id} data={s} />
                )}
            </div>
        );
    }
}
export default connect(
    ({solution})=>({solution}),
    {fetchSolutionByQuestionId}
)(Solution);
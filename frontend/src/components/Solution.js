import React from 'react';

class Solution extends React.Component {
    render() {
        return (
            //must fetch all solutions by qId (in url). will require solution reducer/actions 
            // submitting new solution will require change to api and solutionTable to take from body not url
            <div >  
                <h2 className="posts_heading">Question Solutions:</h2>
                
            </div>
        );
    }
}
export default Solution;
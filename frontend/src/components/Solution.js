import React, {Component} from 'react';

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
export default Solution;
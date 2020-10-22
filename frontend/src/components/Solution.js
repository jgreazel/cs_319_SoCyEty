import React from 'react';
import AllPosts from './AllPosts';

class Solution extends React.Component {
    render() {
        return (
            <div class="column middle">
                <h2>Solutions of assignments.</h2>
                <AllPosts/>
            </div>
        );
    }
}
export default Solution;
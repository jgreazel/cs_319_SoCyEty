import React from 'react';
import AllPosts from './AllPosts';

class Solution extends React.Component {
    render() {
        return (
            //<div class="column middle">
            <div class="column">
                <h2 class="posts_heading">Solutions of assignments:</h2>
                <AllPosts/>
            </div>
        );
    }
}
export default Solution;
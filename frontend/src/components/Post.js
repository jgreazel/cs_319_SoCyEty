import React, {Component} from 'react';

class Post extends Component {
    render(){
        //dummy data for dummy data
        const post = {
            "postId": 1,
            "postAuthor": "Jon",
            "postBody": "First Post",
            "comments": [],
            "datePosted": "2020-10-15T15:56:18.958Z"
        };

        return(
            <div>
                <h3>Post: {post.postId}. By: {post.postAuthor}</h3>
                <h4>Posted On: {new Date(post.datePosted).toString()}</h4>
                <h4>{post.postBody}</h4>
            </div>
        )
    }
}
export default Post;
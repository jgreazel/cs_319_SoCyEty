import React, {Component} from 'react';

class Post extends Component {

    render(){
        const { postAuthor, datePosted, postBody} = this.props.data;
        console.log(postAuthor)
        return(
        <div>{postAuthor}</div>
        )
    }
}
export default Post;
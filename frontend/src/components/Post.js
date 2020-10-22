import React, {Component} from 'react';

class Post extends Component {

    render(){
        const { postId, postAuthor, datePosted, postBody} = this.props.data;
        const displayDate = new Date(datePosted);
        return(
        <div key={postId} className='card'>
            <h4>{postAuthor}</h4>
            <p>{displayDate.getMonth() + '/' + displayDate.getDate() + '/' + displayDate.getFullYear()}</p>
            <p>{postBody}</p>
        </div>
        )
    }
}
export default Post;
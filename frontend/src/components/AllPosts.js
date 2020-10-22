import React, {Component} from 'react';
import Post from './Post';

class AllPosts extends Component{

    state ={posts: []};

    componentDidMount(){
        this.fetchAllPosts();
    }

    fetchAllPosts = () =>{
        fetch('http://localhost:3000/post/all')
            .then( response => response.json())
            .then(json => {
                console.log(json)
                this.setState({ posts: json})
            })
            .catch(error => console.log('error', error));
    }

    render(){
        return(
            <div>
                hello
                {this.state.posts.map(post => 
                    <Post data={post}></Post>
                )}
            </div>
        ) 

        
    }

}
export default AllPosts;
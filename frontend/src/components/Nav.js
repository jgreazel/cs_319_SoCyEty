import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <div class="topnav">
                <a onClick={()=> this.props.handleLogOut()}>Log out</a>
                <a href="index.html">Home</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </div>
        );
    }
}
export default Nav;
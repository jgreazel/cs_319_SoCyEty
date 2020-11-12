import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <ul className="sidenav">
                <li><a onClick={()=> this.props.handleLogOut()}>Log out</a></li>
                <li><a href="index.html">Home</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
            </ul>
        );
    }
}
export default Nav;
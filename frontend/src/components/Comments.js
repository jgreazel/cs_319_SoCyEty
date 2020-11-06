import React from 'react';

class Comments extends React.Component {
    render() {
        return (
            // <div class="column side">
            <div class="column"> 
                <h2>Discussion</h2>
                <nav>
                    <ul class="comment-ul">
                        <li>Xin Jun: Blah blah blah</li>
                        <li>Person 2: Blah blah blah</li>
                        <li>Comment 3</li>
                        <li>Comment 4</li>
                        <li>Comment 5</li>
                        <li>Comment 6</li>
                        <li>Comment 7</li>
                        <li>Comment 8</li>
                        <li>Comment 9</li>
                        <li>Comment 10</li>
                    </ul>
                </nav>
                <form onSubmit="return false;">
                    <textarea class="comment" placeholder="Type your comments here"></textarea>
                    <br />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}
export default Comments;
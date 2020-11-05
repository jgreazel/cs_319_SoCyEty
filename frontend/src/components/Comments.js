import React from 'react';

class Comments extends React.Component {
    render() {
        return (
            <div class="column side">
                <h2>Discussion</h2>
                <nav>
                    <ul>
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
                        <li>Comment 11</li>
                        <li>Comment 12</li>
                        <li>Comment 13</li>
                        <li>Comment 14</li>
                        <li>Comment 15</li>
                        <li>Comment 16</li>
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
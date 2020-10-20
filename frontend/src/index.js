import React from 'react';
import { render } from 'react-dom';
import Post from './components/Post';

render(
    <div>
        <h2>Posts</h2>
        <Post/>
    </div>,
    document.getElementById('root')
);
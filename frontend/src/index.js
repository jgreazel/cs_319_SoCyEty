import React from 'react';
import { render } from 'react-dom';
import './index.css';
import AllPosts from './components/AllPosts';

render(
    <div>
        <h2>Newsfeed</h2>
        <AllPosts/>
    </div>,
    document.getElementById('root')
);
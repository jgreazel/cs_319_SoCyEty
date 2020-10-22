import React from 'react';
import { render } from 'react-dom';
import AllPosts from './components/AllPosts';

render(
    <div>
        <h2>SoCYety</h2>
        <AllPosts/>
    </div>,
    document.getElementById('root')
);
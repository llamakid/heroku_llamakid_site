import React, { Component } from 'react';
import BlogContainer from './BlogContainer';

class Blog extends Component {
    render() {
        return(
            <div>
                <h1>This is my blog conent from Medium.</h1>
                <BlogContainer />
            </div>
        )
    }
}

export default Blog;
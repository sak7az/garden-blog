import React from 'react';
import './Article.css';

class Article extends React.Component{

    render(){
        return (
            <div id="article">
                <h3>Title</h3>
                <p>content</p>
                <button onClick={this.props.backClick}>Click to return to Articles</button>
            </div>
        )
    }
}

export default Article;
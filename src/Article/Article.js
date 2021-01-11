import React from 'react';
import './Article.css';

class Article extends React.Component{

    render(){
        return (
            <div id="article">
                <h3>{this.props.article.title}</h3>
                <p>{this.props.article.body}</p>
                <button onClick={this.props.backClick}>Click to return to Articles</button>
            </div>
        )
    }
}

export default Article;
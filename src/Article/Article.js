import React from 'react';
import './Article.css';

class Article extends React.Component{

    render(){
        return (
            <div id="article">
                <button onClick={this.props.backClick}>Back</button>
                <h3>{this.props.article.title}</h3>
                <p>{this.props.article.body}</p>
                <button onClick={this.props.backClick}>Back</button>
            </div>
        )
    }
}

export default Article;
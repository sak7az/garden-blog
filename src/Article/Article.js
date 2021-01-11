import React from 'react';
import './Article.css';

class Article extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.props.onClick(this.props.title);
    }


    render(){
        return(
            <div onClick={this.handleClick} className="article">
                <h2 className="articleTitle">{this.props.title}</h2>
                <p className="articleText">{this.props.body}</p>
            </div>
        )
    }
}

export default Article;
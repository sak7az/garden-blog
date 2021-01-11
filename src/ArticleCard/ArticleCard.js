import React from 'react';
import './ArticleCard.css';

class ArticleCard extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.props.onClick(this.props.article);
    }


    render(){
        return(
            <div onClick={this.handleClick} className="article">
                <h2 className="articleTitle">{this.props.article.title}</h2>
                <p className="articleText">{this.props.article.body}</p>
            </div>
        )
    }
}

export default ArticleCard;
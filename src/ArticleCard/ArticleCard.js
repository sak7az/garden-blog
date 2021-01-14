import React from 'react';
import './ArticleCard.css';
import Tag from './Tag';

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
                <ul className="tags">
                    {this.props.article.tags.map((tag) =>
                        <Tag 
                            className="tag"
                            key={this.props.article.title+tag}
                            onClick={this.props.clickTag}
                            tag={tag}
                        />
                    
                    )}
                </ul>
            </div>
        )
    }
}

export default ArticleCard;
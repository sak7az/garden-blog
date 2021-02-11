import React from 'react';
import Articles from '../articles.json';
import ArticleCard from '../ArticleCard/ArticleCard';
import Article from '../Article/Article';
import './Reader.css';

class Reader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articles : Articles.articles,
            selected : null,
        }
        this.clickArticle = this.clickArticle.bind(this);
        this.clearSelection = this.clearSelection.bind(this);
        this.storeTags = this.storeTags.bind(this);
        this.retrieveArticlesWithSelectedTags = this.retrieveArticlesWithSelectedTags.bind(this);
        this.isSelectedArticle = this.isSelectedArticle.bind(this);

        this.storeTags();
    }

    clickArticle(article){
        this.setState({
            selected : article
        });
    }

    clearSelection(){
        this.setState({
            selected: null
        });
    }

    storeTags(){
        var possibleTags = [];
        Object.entries(this.state.articles).forEach(([key, value])=>{
            value.tags.forEach(tag=>{
                if (!possibleTags.includes(tag)){ possibleTags.push(tag); }
            });
        });
        this.props.storePossibleTags(possibleTags);
    }

    isSelectedArticle(article){
        var tag;
        for (tag of this.props.selectedTags){
            if (!article.tags.includes(tag)){ return false; }
        }
        return true;
    }

    retrieveArticlesWithSelectedTags(){
        if (this.props.selectedTags.length === 0){ return this.state.articles; }
        let selectedArticles = this.state.articles.filter((article)=>this.isSelectedArticle(article));
        return selectedArticles;
    }

    render(){

        if (this.state.selected !== null){
            return(
                <div id='reader'>
                    <Article 
                        backClick={this.clearSelection}
                        article={this.state.selected}
                    />
                </div>
            )
        } else{
            return(
                <div id='reader'>
                    {this.retrieveArticlesWithSelectedTags().map((article)=>(
                            <ArticleCard
                                key={article.title}
                                article={article}
                                onClick={this.clickArticle}
                                clickTag={this.props.clickTag}
                            />
                        )
                    )}
                </div>
            )
        }
        
    }
}

export default Reader;
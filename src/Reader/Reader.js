import React from 'react';
import Articles from '../articles.json';
import ArticleCard from '../ArticleCard/ArticleCard';
import Article from '../Article/Article';
import './Reader.css';

class Reader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articles : Articles,
            selected : null,
            selectedTags : []
        }
        this.clickArticle = this.clickArticle.bind(this);
        this.clearSelection = this.clearSelection.bind(this);
        this.clickTag = this.clickTag.bind(this);
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

    clickTag(tag){
        console.log(tag);
    }

    render(){
        if (this.state.selected){
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
                    {Object.entries(this.state.articles).map(([key, value])=>(
                            <ArticleCard
                                key={value.title}
                                article={value}
                                onClick={this.clickArticle}
                            />
                        )
                    )}
                </div>
            )
        }
        
    }
}

export default Reader;
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
        }
        this.clickArticle = this.clickArticle.bind(this);
        this.clearSelection = this.clearSelection.bind(this);
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
                    {Object.entries(this.state.articles).map(([key, value])=>(
                            <ArticleCard
                                key={value.title}
                                article={value}
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
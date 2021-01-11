import React from 'react';
import Articles from '../articles.json';
import Article from '../Article/Article';
import './Reader.css';

class Reader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articles : Articles,
            selected : null
        }
        this.clickArticle = this.clickArticle.bind(this);
    }

    clickArticle(article){
        this.setState({
            selected : article
        });
    }

    render(){

        return(
            <div id='reader'>
                {Object.entries(this.state.articles).map(([key, value])=>(
                        <Article
                            key={value.title}
                            title={value.title}
                            body={value.body}
                            image={value.imgsrc}
                            tags={value.tags}
                            onClick={this.clickArticle}
                        />
                    )
                )}
            </div>
        )
    }
}

export default Reader;
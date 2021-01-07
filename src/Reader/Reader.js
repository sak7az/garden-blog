import React from 'react';
import Articles from '../articles.json';
import Article from '../Article/Article';

class Reader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articles : Articles,
        }
    }

    render(){
        return(
            <div>
                {Object.entries(this.state.articles).map(([key, value])=>(
                        <Article
                            title={value.title}
                            body={value.body}
                            image={value.imgsrc}
                        />
                    )
                )}
            </div>
        )
    }
}

export default Reader;
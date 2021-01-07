import React from 'react';


class Article extends React.Component{


    render(){
        return(
            <div>
                <h2 className="articleTitle">{this.props.title}</h2>
                <p className="articleText">{this.props.body}</p>
            </div>
        )
    }
}

export default Article;
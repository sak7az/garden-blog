import React from 'react';
import Tag from '../ArticleCard/Tag';

class Filter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddTagClick = this.handleAddTagClick.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleAddTagClick(){
        var input = document.getElementById("tagInput").value;
        input = this.props.parseTag(input);
        if(!this.props.selectedTags.includes(input) && input !== ""){
            this.props.addTag(input);
            document.getElementById("tagInput").value = "";
        }
    }

    handleKeyUp(e){
        if (e.keyCode === 13){
            this.handleAddTagClick();
        }
    }
        
    render(){
        return(
            <div id="filter">
                    <label 
                        className="formItem"
                        htmlFor="tagInput">Filter by Tags</label>
                    <input 
                        className="formItem" 
                        id="tagInput" 
                        name="tagInput"
                        onKeyUp={this.handleKeyUp}></input> 
                    <button 
                        type='button'
                        className='formItem'
                        onClick={this.handleAddTagClick}
                    >Add Tag</button>
                    <p className='formItem'>Selected Tags: </p>
                    {this.props.selectedTags.map((tag)=>
                        <Tag 
                            className="tag"
                            key={tag}
                            onClick={this.props.addTag}
                            tag={tag}
                        />
                    )}
                    <button 
                        type='button' 
                        className='formItem'
                        onClick={this.props.clearAllTags}
                    >Clear All Tags</button>
            </div>
        )
    }
}

export default Filter;
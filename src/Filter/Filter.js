import React from 'react';

class Filter extends React.Component{

    addTag(){}

    render(){
        return(
            <div id="filter">
                <form>
                    <label 
                        className="formItem"
                        htmlFor="tagInput">Filter by Tags</label>
                    <input 
                        className="formItem" 
                        id="tagInput" 
                        name="tagInput"></input> 
                    <button 
                        type='button'
                        className='formItem'>Add Tag</button>
                    <button 
                        type='button' 
                        className='formItem'
                        onClick={this.props.clearAllTags}
                    >Clear All Tags</button>
                </form>
            </div>
        )
    }
}

export default Filter;
import React from 'react';

class Filter extends React.Component{
    render(){
        return(
            <div id="filter">
                <form>
                    <input></input>
                    <button type='button' onClick={this.props.clearAllTags}>Clear All Tags</button>
                </form>
            </div>
        )
    }
}

export default Filter;
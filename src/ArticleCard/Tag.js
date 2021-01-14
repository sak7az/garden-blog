import React from 'react';

class Tag extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.onClick(this.props.tag);
    }

    render(){
        return (
            <li onClick={this.handleClick}>{this.props.tag}</li>
        )
    }
}
 export default Tag;
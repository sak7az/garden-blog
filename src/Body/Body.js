import React from 'react';
import Menu from '../Menu/SideBar';
import Reader from '../Reader/Reader';

class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display : "home"
        }
        this.selectMenuItem = this.selectMenuItem.bind(this);
    }

    selectMenuItem(item){
        this.setState({
            display: item
        });
    }

    render(){


        return (
            <div>
                <Menu 
                    handleClick={this.selectMenuItem}
                />
                <Reader />
            </div>
        )
    }
}

export default Body;
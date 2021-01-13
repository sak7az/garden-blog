import React from 'react';
import Menu from '../Menu/SideBar';
import Reader from '../Reader/Reader';

class Body extends React.Component{
    constructor(props){
        super(props);
        this.selectMenuItem = this.selectMenuItem.bind(this);
        this.state = {
            display : "home"
        }
    }

    selectMenuItem(item){
        
    }

    render(){
        return (
            <div>
                <Menu 
                    selector={this.selectMenuItem}
                />
                <Reader />
            </div>
        )
    }
}

export default Body;
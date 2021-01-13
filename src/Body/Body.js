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

        switch(this.state.display){
            case "home":
                return (
                    <div>
                        <Menu 
                            handleClick={this.selectMenuItem}
                        />
                        <Reader />
                    </div>
                );
            case "about":
                return (
                    <div>
                        <Menu
                            handleClick={this.selectMenuItem}
                        />
                        <About />
                    </div>
                );
            case "calendar":
                return (
                    <div>
                        <Menu
                            handleClick={this.selectMenuItem}
                        />
                        <Calendar />
                    </div>
                );
            case "contact":
                return (
                    <div>
                        <Menu
                            handleClick={this.selectMenuItem}
                        />
                        <Contact />
                    </div>
                )
        }
    }
}

export default Body;
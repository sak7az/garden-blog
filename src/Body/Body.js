import React from 'react';
import Menu from '../Menu/SideBar';
import Reader from '../Reader/Reader';
import About from '../About/About';
import Calendar from '../Calendar/Calendar';
import Contact from '../Contact/Contact';

class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display : "home",
            selectedTags: []
        }
        this.selectMenuItem = this.selectMenuItem.bind(this);
        this.clickTag = this.clickTag.bind(this);
    }

    selectMenuItem(item){
        this.setState({
            display: item
        });
    }

    clickTag(tag){
        console.log(tag);
    }

    render(){

        switch(this.state.display){
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
            default:
                return (
                    <div>
                        <Menu 
                            handleClick={this.selectMenuItem}
                        />
                        <Reader 
                            clickTag={this.clickTag}
                            selectedTags={this.state.selectedTags}
                        />
                    </div>
                );
        }
    }
}

export default Body;
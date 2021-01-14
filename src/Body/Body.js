import React from 'react';
import SideBar from '../SideBar/SideBar';
import Reader from '../Reader/Reader';
import About from '../About/About';
import Calendar from '../Calendar/Calendar';
import Contact from '../Contact/Contact';

class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display : "home",
            selectedTags: [],
            possibleTags: []
        }
        this.selectMenuItem = this.selectMenuItem.bind(this);
        this.addTag = this.addTag.bind(this);
        this.clearAllTags = this.clearAllTags.bind(this);
    }

    selectMenuItem(item){
        this.setState({
            display: item
        });
    }

    addTag(tag){
        var clone = [...this.state.selectedTags];
        if(clone.includes(tag)){ 
            var remove = clone.indexOf(tag);
            clone.splice(remove, 1);
        }else {
            clone.push(tag);
        }
        this.setState({
            selectedTags: clone
        });
        console.log(this.state.selectedTags);
    }

    storePossibleTags(){

    }

    clearAllTags(){
        this.setState({
            selectedTags : []
        });
        console.log("cleared tags");
    }

    render(){

        switch(this.state.display){
            case "about":
                return (
                    <div>
                        <SideBar
                            handleClick={this.selectMenuItem}
                        />
                        <About />
                    </div>
                );
            case "calendar":
                return (
                    <div>
                        <SideBar
                            handleClick={this.selectMenuItem}
                        />
                        <Calendar />
                    </div>
                );
            case "contact":
                return (
                    <div>
                        <SideBar
                            handleClick={this.selectMenuItem}
                        />
                        <Contact />
                    </div>
                )
            default:
                return (
                    <div>
                        <SideBar 
                            handleClick={this.selectMenuItem}
                            clearAllTags={this.clearAllTags}
                            addTag={this.addTag}
                            selectedTags={this.state.selectedTags}
                        />
                        <Reader 
                            clickTag={this.addTag}
                            selectedTags={this.state.selectedTags}    
                        />
                    </div>
                );
        }
    }
}

export default Body;
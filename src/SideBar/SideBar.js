import React from 'react';
import Filter from '../Filter/Filter';
import './SideBar.css';

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selection : null
        };
        this.handleHomeClick = this.handleHomeClick.bind(this);
        this.handleAboutClick = this.handleAboutClick.bind(this);
        this.handleCalendarClick = this.handleCalendarClick.bind(this);
        this.handleContactClick = this.handleContactClick.bind(this);
    }

    handleHomeClick(){
        this.props.handleClick("home");
    }

    handleAboutClick(){
        this.props.handleClick("about");
    }

    handleCalendarClick(){
        this.props.handleClick("calendar");
    }

    handleContactClick(){
        this.props.handleClick("contact");
    }

    render(){
        return(
            <div id="sidebar">
                <nav id="menu">
                    <a href="#home" onClick={this.handleHomeClick}>home</a>
                    <a href="#about" onClick={this.handleAboutClick}>about</a>
                    <a href="#calendar" onClick={this.handleCalendarClick}>calendar</a>
                    <a href="#contact" onClick={this.handleContactClick}>contact</a>
                </nav>
                <Filter 
                    clearAllTags={this.props.clearAllTags}
                    addTag={this.props.addTag}
                    selectedTags={this.props.selectedTags}
                />
            </div>
            
        )
    }
}

export default Menu;
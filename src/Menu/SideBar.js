import React from 'react';
import Filter from '../Filter/Filter';
import './SideBar.css';

class Menu extends React.Component{

    render(){
        return(
            <div>
                <nav id="menu">
                    <a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#calendar">calendar</a>
                    <a href="#contact">contact</a>
                </nav>
                <Filter />
            </div>
            
        )
    }
}

export default Menu;
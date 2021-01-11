import React from 'react';
import './Header.css';

class Header extends React.Component{

    render(){
        return (
            <div id="header">
                <div id="overlay">
                    <h1> 
                        Clever Title goes Here
                    </h1>
                </div>
            </div>
        )
    }
}

export default Header;
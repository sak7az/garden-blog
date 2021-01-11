import React from 'react';
import './Header.css';

class Header extends React.Component{

    render(){
        return (
            <div id="header">
                <h1> 
                    <span>
                        Photo by 
                            <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Markus Spiske</a> 
                        on 
                            <a href="https://unsplash.com/s/photos/garden?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
                    </span> 
                </h1>
            </div>
        )
    }
}

export default Header;
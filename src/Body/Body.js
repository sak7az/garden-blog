import React from 'react';
import Menu from '../Menu/SideBar';
import Reader from '../Reader/Reader';

class Body extends React.Component{

    render(){
        return (
            <div>
                <Menu />
                <Reader />
            </div>
        )
    }
}

export default Body;
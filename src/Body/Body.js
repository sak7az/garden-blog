import React from 'react';
import Header from '../Header/Header';
import Reader from '../Reader/Reader';

class Body extends React.Component{

    render(){
        return (
            <div>
                <Header />
                <Reader />
            </div>
        )
    }
}

export default Body;
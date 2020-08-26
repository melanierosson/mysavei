import React from 'react';
import './Title.css';

const titleStyle = {
    paddingBottom: "1rem",
    paddingTop:"1rem",
};

const Title = () => (
    <header id="mysavei-title">
        <span class="title-dot"></span>
        <h1 style={titleStyle}
            id="mysavei-title" 
            className="text-center">
            mySavei
        </h1>
    </header>
)

export default Title;
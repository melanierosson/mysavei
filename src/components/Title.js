import React from 'react';
import '../css/title.css';

const Title = ({content, bgColor}) => (
    <header id="mysavei-title" style={{backgroundColor: `${bgColor}`}}>
        <span className="title-dot"></span>
        <h1 id="mysavei-title">
            mySavei
        </h1>
        <h2 className="subtitle" content="Quick Start Investing">
            {content}
        </h2>
    </header>
)

export default Title;
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/title.css';

const Title = ({content, bgColor}) => (
    <header id="mysavei-title" style={{backgroundColor: `${bgColor}`}}>
        <Link to={process.env.PUBLIC_URL + '/'} exact>
            <span className="title-dot"></span>
            <h1 id="mysavei-title">
                mySavei
            </h1>
        </Link>
        <h2 className="subtitle" content="Quick Start Investing">
            {content}
        </h2>
    </header>
)

export default Title;
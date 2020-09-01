import React from 'react';
import { Link } from 'react-router-dom';

const UserOptions = () => (
    <nav>
        <ul className="options-list">
            <li id="passive-option">
                <Link to="/passive">
                    <b>I want to invest my money passively, long-term.</b>
                    <br/><br/>
                    <i>i.e. not check your account or participate in the investment process once it’s started</i>
                </Link>
            </li>
            <li id="both-option">
                <Link to="/all">
                    <b>What about a little of both?</b>
                </Link>
            </li>
            <li id="active-option">
                <Link to="/active">
                    <b>I want to invest actively in the stock market.</b>
                    <br/><br/>
                    <i>i.e. you want to learn a little bit more about stocks, do some short-term trading, and setup
                    re-occurring deposits</i>
                </Link>
            </li>
        </ul>
    </nav>
)

export default UserOptions;
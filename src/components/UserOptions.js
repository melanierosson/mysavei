import React from 'react';
import { Link } from 'react-router-dom';

const UserOptions = () => (
    <nav>
        <ul className="options-list">
            <li id="passive-option">
                <Link to={process.env.PUBLIC_URL + '/passive'}>
                    <span className="fw-semibold">I want to invest my money passively,<br/>long-term.</span>
                    <br /><br className="hide-mobile"/>
                    <span className="more-descr">i.e. not check your account or participate in the investment process once it’s started</span>
                    <div className="bottom-2">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </Link>
            </li>
            <li id="both-option">
                <Link to={process.env.PUBLIC_URL + '/all'}>
                    <span className="fw-semibold">What about a little of both? <i class="mobile-arrow fas fa-chevron-right"></i> </span>
                    <div className="bottom-2">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </Link>
            </li>
            <li id="active-option">
                <Link to={process.env.PUBLIC_URL + '/active'}>
                    <span className="fw-semibold">I want to invest actively in the stock market.</span>
                    <br/><br className="hide-mobile"/>
                    <span className="more-descr">i.e. you want to learn a little bit more about stocks, do some short-term trading, and setup
                    re-occurring deposits</span>
                    <div className="bottom-2">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </Link>
            </li>
        </ul>
    </nav>
)

export default UserOptions;
import React from 'react';
import { Link } from 'react-router-dom';

const UserOptions = () => {

    const removeHoverBlock = () => {
        setTimeout(function(){ document.getElementById('timeout').style.display = "none"; }, 1000);
    }
    removeHoverBlock();

    return (
        <nav>
            {/* this timeout overlay is to prevent mobile touch screens from causing delayed hover effects on this page after pressing a button on the homepage */}
            <div id="timeout"></div>
            <ul className="options-list">
                <li id="passive-option">
                    <Link to={process.env.PUBLIC_URL + '/passive'} className="option-link">
                        <span className="fw-semibold more-head">Passively, <br className="hide-on-mobile"/>long-term</span>
                        <br /><br className="hide-mobile"/>
                        <span className="more-descr">i.e. not check your account or participate in the investment process once it’s started</span>
                        <div className="bottom-2">
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </Link>
                </li>
                <li id="both-option">
                    <Link to={process.env.PUBLIC_URL + '/all'} className="option-link">
                        <span className="fw-semibold more-head">Both? <i className="mobile-arrow fas fa-chevron-right"></i> </span>
                        <div className="bottom-2">
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </Link>
                </li>
                <li id="active-option">
                    <Link to={process.env.PUBLIC_URL + '/active'} className="option-link">
                        <span className="fw-semibold more-head">Actively <br className="hide-on-mobile"/>trade</span>
                        <br/><br className="hide-mobile"/>
                        <span className="more-descr">i.e. learn a little bit more about stocks, do some short-term trading, and setup
                        re-occurring deposits</span>
                        <div className="bottom-2">
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default UserOptions;
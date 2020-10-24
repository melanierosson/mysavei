import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';

const Nav = ({ bgColor, showDesktop, showMobile, home, all }) => (
    <nav className={`navigation ${showDesktop ? 'hide-on-mobile' : ''} ${showMobile ? 'hide-on-desktop' : ''}`} style={{ backgroundColor: `${bgColor}` }}>
        <article className="row">
            <section id="nav-home" className={`nav ${home ? 'active-nav' : ''}`}>
                <Link to={process.env.PUBLIC_URL + '/'} exact>
                    <p className="nav-link">
                        home
                    </p>
                </Link>
            </section>
            <section id="nav-email" className="nav">
                <p className="nav-link">
                    <a href="mailto:mysavei.investing@gmail.com?subject=mySavei%20Feedback">
                        feedback
                    </a>
                </p>
            </section>
            <section id="nav-all" className={`nav ${all ? 'active-nav' : ''}`}>
                <Link to={process.env.PUBLIC_URL + '/all'}>
                    <p className="nav-link">
                        all
                    </p>
                </Link>
            </section>
        </article>
    </nav>
)

export default Nav;
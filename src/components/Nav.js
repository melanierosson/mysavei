import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';

const Nav = ({ bgColor, showDesktop, showMobile, home, all }) => {

    const homePage = () => {
        window.location = window.location.hostname;
    }
    const sendEmail = () => {
        window.location = 'mailto:mysavei.investing@gmail.com?subject=mySavei%20Feedback';
    }
    const allPage = () => {
        window.location = window.location.hostname + '/all';
    }

   return (
    <nav className={`navigation ${showDesktop ? 'hide-on-mobile' : ''} ${showMobile ? 'hide-on-desktop' : ''}`} style={{ backgroundColor: `${bgColor}` }}>
        <article className="row">
            <Link to={process.env.PUBLIC_URL + '/'} exact id="nav-link-home">
                <section id="nav-home" 
                    className={`nav ${home ? 'active-nav' : ''}`}
                >
                        <p className="nav-link">
                            home
                        </p>
                </section>
            </Link>
            <section id="nav-email" className="nav" onClick={sendEmail} >
                <p className="nav-link">
                    <a href="mailto:mysavei.investing@gmail.com?subject=mySavei%20Feedback">
                        feedback
                    </a>
                </p>
            </section>
            <Link to={process.env.PUBLIC_URL + '/all'} id="nav-link-all">
                <section id="nav-all" 
                    className={`nav ${all ? 'active-nav' : ''}`} 
                >
                    <p className="nav-link">
                        all
                    </p>
                </section>
            </Link>
        </article>
    </nav>
)}

export default Nav;
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

const Footer = () => (
    <nav className="footer">
        <footer className="row">
            <section id="footer-home" className="footer-nav col-4">
                <Link to="/" exact>
                    <p className="footer-nav-link">
                        <span className="footer-nav-span" style={{ paddingLeft: '25px' }}>
                            <i class="fas fa-home"></i>
                        </span><br />
                        <span className="footer-nav-span" style={{ paddingLeft: '21px' }}>
                            home
                        </span>
                    </p>
                </Link>
            </section>
            <section id="footer-melp" className="footer-nav col-4">
                <p className="footer-nav-link">
                    <a href="mailto:melanielynnpanem@gmail.com">
                        <span className="footer-nav-link"><i class="far fa-envelope"></i></span>
                    </a><br/>
                    <a href="http://melpdesigns.com" target="_blank">
                        <span className="footer-nav-link">melp designs</span>
                    </a>
                </p>
            </section>
            <section id="footer-all" className="footer-nav col-4">
                <Link to="/all">
                    <p className="footer-nav-link">
                        <span className="footer-nav-link" style={{ paddingRight: '20px' }}><i class="fas fa-list-ul"></i></span><br/>
                        <span className="footer-nav-link" style={{ paddingRight: '25px' }}>all</span>
                    </p>
                </Link>
            </section>
        </footer>
    </nav>
)

export default Footer;
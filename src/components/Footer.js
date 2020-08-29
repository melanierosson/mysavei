import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

const Footer = () => (
    <nav className="footer">
        <footer className="row">
            <section id="footer-home" className="footer-nav col-3">
                <Link to="/" exact>
                    <p className="footer-nav-link">
                        <span className="footer-nav-span" style={{ marginBottom: '-10px' }}>
                            <i class="fas fa-home"></i>
                        </span>
                        <br />
                        <span className="footer-nav-span" style={{ marginTop: '-10px' }}>
                            home
                        </span>
                    </p>
                </Link>
            </section>
            <section id="footer-melp" className="footer-nav col-3">
                <p className="footer-nav-link">
                    <a href="http://melpdesigns.com" target="_blank">
                        <span className="footer-nav-link">
                            melp<br/>designs
                        </span>
                    </a>
                </p>
            </section>
            <section id="footer-email" className="footer-nav col-3">
                <p className="footer-nav-link">
                    <a href="mailto:melanielynnpanem@gmail.com">
                        <span className="footer-nav-link">
                            <i class="far fa-envelope"></i>
                        </span>
                        <br />
                        <span className="footer-nav-link">
                            email
                        </span>
                    </a>
                </p>
            </section>
            <section id="footer-all" className="footer-nav col-3">
                <Link to="/all">
                    <p className="footer-nav-link">
                        <span className="footer-nav-link" style={{ marginBottom: '-10px' }}>
                            <i class="fas fa-list-ul"></i>
                        </span>
                        <br/>
                        <span className="footer-nav-link" style={{ marginTop: '-10px' }}>
                            all
                        </span>
                    </p>
                </Link>
            </section>
        </footer>
    </nav>
)

export default Footer;
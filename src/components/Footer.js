import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
    <nav className="footer">
        <footer className="row">
            <section id="footer-home" className="footer-nav col-4">
                <Link to="/" exact style={{ paddingLeft: '30px' }}>
                    <i class="fas fa-home"></i>
                </Link>
                <Link to="/" exact style={{ paddingLeft: '20px' }}>
                    home
                </Link>
            </section>
            <section id="footer-melp" className="footer-nav col-4">
                <a href="mailto:melanielynnpanem@gmail.com">
                    <i class="far fa-envelope"></i>
                </a>
                <a href="http://melpdesigns.com" target="_blank">
                    melp designs
                </a>
            </section>
            <section id="footer-all" className="footer-nav col-4">
                <Link to="/all" style={{ paddingRight: '20px' }}>
                    <i class="fas fa-list-ul"></i>
                </Link>
                <Link to="/all" style={{ paddingRight: '20px' }}>
                    all
                </Link>
            </section>
        </footer>
    </nav>
)

export default Footer;
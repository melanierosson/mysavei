import React, { useState } from 'react';
import Title from '../components/Title.js';
import Figure from 'react-bootstrap/Figure';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import '../css/home.css';

// home page component
const Home = () => {

    return (
    <>
        <section className="top" style={{ backgroundColor: '#39D08A'}}>
            <Title content="Quick Start Investing" bgColor="#39D08A" />
            <Nav className="hide-on-mobile desktop-nav" bgColor="#39D08A" />
        </section>
        
        <main id="page">
            <article className="why-invest">
                <Figure>
                    <Figure.Image
                        id="video-intro"
                        width={30}
                        height={30}
                        alt="video placeholder"
                        src="https://img.icons8.com/android/24/000000/play.png"
                    />
                    <Figure.Caption style={{textAlign:'center', fontSize:'0.75rem', lineHeight: '1rem', marginBottom:'-8px' }}>
                        <b>Why Invest?</b> <br />video placeholder
                    </Figure.Caption>
                </Figure>
            </article>
            <ul className="options-list">
                <Link to={process.env.PUBLIC_URL + '/step2'}>
                    <li>
                        <p>
                            I want to see my <span className="fw-medium">personal investment strategy</span>
                        </p>
                        <div className="bottom">
                            <span className="time">&lt; 2 min.</span>
                        </div>
                    </li>
                </Link>
                <Link to={process.env.PUBLIC_URL + '/all'}>
                    <li>
                        <p>
                            I want to see <span className="fw-medium">all investment &amp; savings information</span>
                        </p>
                        <div className="bottom">
                            <span className="time">&lt; 15 min.</span>
                        </div>
                    </li>
                </Link>
            </ul>
        </main>
        <Footer />
    </>
    )
}  

export default Home;
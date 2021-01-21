import React from 'react';
import Title from '../components/Title.js';
import Figure from 'react-bootstrap/Figure';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import '../css/home.css';

// home page component
const Home = () => {

    const leftClockOver = () => {
        document.querySelector('div.circle.clock-left').style.transform = "scale(1.07)";
        document.querySelector('div.circle.clock-left').style.transition = "linear 0.25s";
    }
    const leftClockOut = () => {
        document.querySelector('div.circle.clock-left').style.transform = "scale(1)";
    }
     const rightClockOver = () => {
        document.querySelector('div.circle.clock-right').style.transform = "scale(1.07)";
        document.querySelector('div.circle.clock-right').style.transition = "linear 0.25s";
    }
    const rightClockOut = () => {
        document.querySelector('div.circle.clock-right').style.transform = "scale(1)";
    }

    return (
        <section id="app" style={{boxShadow: '0 0 50px rgba(103,230,172,0.6)'}}>
            <section className="top" style={{ backgroundColor: '#39D08A', boxShadow: '0 0 0 rgba(0,0,0,0)'}}>
                <Title content="Quick Start Investing" bgColor="#39D08A" />
                <Nav 
                    className="hide-on-mobile desktop-nav" 
                    bgColor="#39D08A" 
                    showDesktop="true" 
                    showMobile="false"
                    home="true"
                />
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
                    <div className="circle clock-left">
                        <div className="triangle-1"></div>
                        <div className="sec-hand"></div>
                        <div className="min-hand"></div>
                    </div>
                    <Link to={process.env.PUBLIC_URL + '/step2'}>
                        <li 
                            onMouseOver={leftClockOver} 
                            onMouseOut={leftClockOut}
                        >
                            <p>
                                See my personal investment strategy
                            </p>
                            <div className="bottom">
                                <span className="time">&lt; 2 min.</span>
                            </div>
                        </li>
                    </Link>
                    <div className="circle clock-right">
                        <div className="triangle-1"></div>
                        <div className="triangle-2"></div>
                        <div className="sec-hand"></div>
                        <div className="min-hand"></div>
                    </div>
                    <Link to={process.env.PUBLIC_URL + '/all'}>
                        <li 
                            onMouseOver={rightClockOver} 
                            onMouseOut={rightClockOut}
                        >
                            <p>
                                See all investment &amp; savings information
                            </p>
                            <div className="bottom">
                                <span className="time">&lt; 15 min.</span>
                            </div>
                        </li>
                    </Link>
                </ul>
            </main>
            <section 
                className="mobile-nav hide-on-desktop" 
                style={{ backgroundColor: '#39D08A', zIndex: 1000}}
            >
                <Nav 
                    bgColor='#39D08A'
                    home='true'
                />
            </section>
            <Footer />
        </section>
    )
}  

export default Home;
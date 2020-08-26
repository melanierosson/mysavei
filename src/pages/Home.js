import React from 'react';
import Title from '../components/Title.js';
import Figure from 'react-bootstrap/Figure';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.js';
import './Home.css';

// home page component
const Home = () => (
    <>
        <Title />
        <h3 className="subtitle">Quick Start Investing</h3>
        <main>
            <article className="why-invest">
                <Figure>
                    <Figure.Image
                        id="video-intro"
                        width={100}
                        height={100}
                        alt="video placeholder"
                        src="https://img.icons8.com/material-two-tone/96/000000/video.png"
                    />
                    <Figure.Caption>
                        <b>Why Invest?</b> video placeholder
                    </Figure.Caption>
                </Figure>
            </article>
            <ul className="options-list">
                <li>
                    <Link to="/step2">
                        I want to see my <span className="fw-semibold">personal investment strategy</span> <br />(&lt;2min)
                    </Link>
                </li>
                <li>
                    <Link to="/all">
                        I want to see <span className="fw-semibold">all investment &amp; savings information</span> <br />(&lt;10min)
                    </Link>
                </li>
            </ul>
        </main>
        <Footer />
    </>
)

export default Home;
import React from 'react';
import Title from '../components/Title.js';
import Figure from 'react-bootstrap/Figure';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.js';
import '../css/home.css';

// home page component
const Home = () => (
    <>
        <Title />
        <h2 className="subtitle">Quick Start Investing</h2>
        <main>
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
                <Link to="/step2">
                    <li>
                        <p>
                            I want to see my <span className="fw-medium">personal investment strategy</span>
                        </p>
                        <div className="bottom">
                            <span className="time">&lt; 2 min.</span>
                        </div>
                    </li>
                </Link>
                <Link to="/all">
                    <li>
                        <p>
                            I want to see <span className="fw-medium">all investment &amp; savings information</span>
                        </p>
                        <div className="bottom">
                            <span className="time">&lt; 10 min.</span>
                        </div>
                    </li>
                </Link>
            </ul>
        </main>
        <Footer />
    </>
)

export default Home;
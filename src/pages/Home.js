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
        <h3 className="subtitle">Quick Start Investing</h3>
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
                <li>
                    <Link to="/step2">
                        I want to see my <span className="fw-medium">personal investment strategy</span>
                    </Link>
                    <div class="bottom">
                        <span className="time">&lt; 2 min.</span>
                    </div>
                </li>
                <li>
                    <Link to="/all">
                        I want to see <span className="fw-medium">all investment &amp; savings information</span>
                    </Link>
                    <div class="bottom">
                        <span className="time">&lt; 10 min.</span>
                    </div>
                </li>
            </ul>
        </main>
        <Footer />
    </>
)

export default Home;
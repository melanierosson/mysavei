import React from 'react';
import Title from '../components/Title.js';
import MobileApp from '../components/MobileApp.js';
import NeedToKnow from '../components/NeedToKnow.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import '../css/passive.css';

const LongTerm = () => (
    <section id="app" style={{boxShadow: '0 0 50px rgba(127,230,226,0.5)'}}>
        <section className="top" style={{ backgroundColor: '#5DD4CF' }}>
            <Title content="Your Investment Strategy" bgColor="#5DD4CF" />
            <Nav
                className="hide-on-mobile desktop-nav"
                bgColor="#5DD4CF"
                showDesktop="true"
                showMobile="false"
            />
        </section>
        
        <main className="content-page" id="passive-content">
            <section id="passive" className="content-container passive-container" style={{ marginBottom: '100px', marginTop:'10px' }}>
                <h2 className="page-title">Passive Investing</h2>
                <p className="page-description">
                    You rarely want to check your account or participate in the investment process once it’s started.
                </p>
                <MobileApp type={true} containAll={true} expand="See" passiveColor="true" />
                <br /><br />
                <NeedToKnow type={true} showTitle={true}/>
            </section>

        </main>
        <section 
            className="mobile-nav hide-on-desktop" 
            style={{ backgroundColor: '#5DD4CF', zIndex: 1000}}
        >
            <Nav 
                bgColor='#5DD4CF'
            />
        </section>
        <Footer />
    </section>
)

export default LongTerm;
import React from 'react';
import Title from '../components/Title.js';
import MobileApp from '../components/MobileApp.js';
import NeedToKnow from '../components/NeedToKnow.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import '../css/active.css';

const Active = () => (
    <section id="app" style={{boxShadow: '0 0 40px rgba(250,228,149,0.5)'}}>
        <section className="top" style={{ backgroundColor: '#FAD551' }}>
            <Title content="Your Investment Strategy" bgColor="#FAD551" />
            <Nav
                className="hide-on-mobile desktop-nav"
                bgColor="#FAD551"
                showDesktop="true"
                showMobile="false"
            />
        </section>
        
        <main className="content-page" id="active-content">

            <section id="active" className="content-container active-container" style={{ marginBottom: '100px', marginTop: '10px'}}>
                <h2 className="page-title">Active Investing</h2>
                <p className="page-description">
                    You want to learn a little bit more about stocks, do some short-term trading, and maybe setup re-occurring deposits.
                </p>
                <MobileApp type={false} containAll={true} expand="See" activeColor="true"/>
                <br /><br />
                <NeedToKnow type={false} showTitle={true}/>
            </section>

        </main>
        <section 
            className="mobile-nav hide-on-desktop" 
            style={{ backgroundColor: '#FAD551', zIndex: 1000}}
        >
            <Nav 
                bgColor='#FAD551'
            />
        </section>
        <Footer />
    </section>
)

export default Active;
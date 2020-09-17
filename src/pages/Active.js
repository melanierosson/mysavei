import React from 'react';
import Title from '../components/Title.js';
import MobileApp from '../components/MobileApp.js';
import NeedToKnow from '../components/NeedToKnow.js';
import Footer from '../components/Footer.js';
import '../css/active.css';

const Active = () => (
    <>
        <Title content="Your Investment Strategy" />
        <main class="content-page" id="active-content">
            
            <h2 className="subtitle">Active Investing</h2>
            <p className="page-description">
                You want to learn a little bit more about stocks, do some short-term trading, and maybe setup re-occurring deposits.
            </p>

            <section id="active" class="bordered active-container" style={{ marginBottom: '100px'}}>
                <MobileApp type={false} containAll={true} expand="See" />
                <br /><br />
                <NeedToKnow type={false} showTitle={true}/>
            </section>

        </main>
        <Footer />
    </>
)

export default Active;
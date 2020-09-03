import React from 'react';
import Title from '../components/Title.js';
import MobileApp from '../components/MobileApp.js';
import NeedToKnow from '../components/NeedToKnow.js';
import Footer from '../components/Footer.js';

const Active = () => (
    <>
        <Title/>
        <main class="content-page" id="active-content">
            
            <h3 className="subtitle">Active Investing</h3>
            <p class="page-description">
                You want to learn a little bit more about stocks, do some short-term trading, and maybe setup re-occurring deposits.
            </p>

            <section id="active" class="bordered active-container">
                <MobileApp type={false} containDescr={true} expand="See more" />
                <NeedToKnow />
            </section>

        </main>
        <Footer />
    </>
)

export default Active;
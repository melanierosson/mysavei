import React from 'react';
import Title from '../components/Title.js';
import MobileApp from '../components/MobileApp.js';
import NeedToKnow from '../components/NeedToKnow.js';
import Footer from '../components/Footer.js';
import '../css/active.css';

const Active = () => (
    <>
        <Title content="Your Investment Strategy" bgColor="#FAD551"/>
        <main className="content-page" id="active-content">

            <section id="active" class="content-container active-container" style={{ marginBottom: '100px'}}>
                <h2 className="page-title">Active Investing</h2>
                <p className="page-description">
                    You want to learn a little bit more about stocks, do some short-term trading, and maybe setup re-occurring deposits.
                </p>
                <MobileApp type={false} containAll={true} expand="See" />
                <br /><br />
                <NeedToKnow type={false} showTitle={true}/>
            </section>

        </main>
        <Footer />
    </>
)

export default Active;
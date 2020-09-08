import React from 'react';
import Title from '../components/Title.js';
import MobileApp from '../components/MobileApp.js';
import NeedToKnow from '../components/NeedToKnow.js';
import Footer from '../components/Footer.js';

const LongTerm = () => (
    <>
        <Title/>
        <main class="content-page" id="passive-content">

            <h2 className="subtitle">Long-Term, Passive Investing</h2>
            <p class="page-description">
                You rarely want to check your account or participate in the investment process once it’s started.
            </p>

            <section id="passive" class="bordered passive-container" style={{ marginBottom: '100px' }}>
                <MobileApp type={true} containDescr={true} expand="See more" />
                <br /><br />
                <NeedToKnow type={true} showTitle={true}/>
            </section>

        </main>
        <Footer />
    </>
)

export default LongTerm;
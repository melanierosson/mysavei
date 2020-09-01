import React from 'react';
import Title from '../components/Title.js';
import MobileApp from '../components/MobileApp.js';
import IndexFunds from '../components/IndexFunds.js';
import Footer from '../components/Footer.js';

const LongTerm = () => (
    <>
        <Title/>
        <main class="content-page" id="passive-content">

            <h3 className="subtitle">Long-Term, Passive Investing</h3>
            <p class="page-description">
                You rarely want to check your account or participate in the investment process once it’s started.
            </p>

            <section id="passive" class="bordered passive-container">
                <MobileApp type={true} containDescr={true} expand="See more" />
            </section>

        </main>
        <Footer />
    </>
)

export default LongTerm;
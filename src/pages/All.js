import React from 'react';
import Title from '../components/Title.js';
import NeedToKnow from '../components/NeedToKnow.js';
import MobileApp from '../components/MobileApp.js';
import Footer from '../components/Footer.js';

const All = ({props}) => {

    return (
        <>
            <Title />
            <main class="content-page" id="all-content">
                <h3 className="subtitle">All Resources and Information</h3>

                <section id="mobile-apps" class="bordered all-container">
                    <h4 class="section-title">Mobile Apps</h4>
                    <MobileApp type={true} containAll={true} expand="See more"/>
                    <br /><br />
                    <MobileApp type={false} containAll={true} expand="See more"/>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default All;
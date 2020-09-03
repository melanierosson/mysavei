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
                <h2 className="subtitle">All Resources and Information</h2>

                <section id="mobile-apps" class="bordered all-container">
                    <h3>Mobile Apps</h3>
                    <MobileApp type={true} containAll={true} expand="See more"/>
                    <br /><br />
                    <MobileApp type={false} containAll={true} expand="See more"/>
                </section>
                <br /><br />
                <section id="know" class="bordered all-container">
                    <h3>Need To Know</h3>
                    <NeedToKnow type={true} showTitle={false} />
                    <br /><br />
                    <NeedToKnow type={false} showTitle={false} />
                </section>

            </main>
            <Footer />
        </>
    )
}

export default All;
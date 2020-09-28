import React, {useState} from 'react';
import Title from '../components/Title.js';
import UserOptions from '../components/UserOptions.js';
import Footer from '../components/Footer.js';
import '../css/step2.css';

const SecondStep = () => {

    return (
        <>
            <Title content="Your Investment Strategy" bgColor="#39D08A"/>
            <main id="step2-page" class="content-page">
                
                <section id="step2-question" className="component-content">
                    <div className="left"></div>
                    <p id="step2-q-text" className="text-center fw-medium">
                        How would you<br/>like to invest?
                    </p>
                    <div className="right"></div>
                </section>

                <UserOptions />

            </main>
            <Footer />
        </>
    )
}

export default SecondStep;
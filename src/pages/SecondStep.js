import React from 'react';
import Title from '../components/Title.js';
import UserOptions from '../components/UserOptions.js';
import Footer from '../components/Footer.js';
import '../css/step2.css';

const SecondStep = () => (
    <>
        <Title/>
        <main id="step2-page" class="content-page">
            <h3 className="subtitle">Your Investment Strategy</h3>

            <section id="step2-question" className="component-content">
                <p id="step2-q-text" className="text-center fw-medium">
                    How would you<br/>like to invest?
                </p>
            </section>

            <UserOptions />

        </main>
        <Footer />
    </>
)

export default SecondStep;
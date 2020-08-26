import React from 'react';
import Title from '../components/Title.js';
import UserOptions from '../components/UserOptions.js';
import Footer from '../components/Footer.js';

const SecondStep = () => (
    <>
        <Title/>
        <main>
            <h2 style={{ textAlign: "center" }}>Would you like to?</h2>
            <UserOptions />
        </main>
        <Footer />
    </>
)

export default SecondStep;
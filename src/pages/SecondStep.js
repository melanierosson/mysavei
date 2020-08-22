import React from 'react';
import Title from '../components/Title.js';
import UserOptions from '../components/UserOptions.js';

const SecondStep = () => (
    <>
        <Title/>
        <main>
            <h2 style={{ textAlign: "center" }}>Would you like to?</h2>
            <UserOptions />
        </main>
    </>
)

export default SecondStep;
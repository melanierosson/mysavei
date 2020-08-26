import React from 'react';
import Title from '../components/Title.js';
import Robinhood from '../components/Robinhood.js';
import KeyTerms from '../components/KeyTerms.js';
import Footer from '../components/Footer.js';

const pageStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
}
const listStyle = {
    listStyleType: "none",
    textAlign: "center",
    padding: "20px",
}
const component = {
    border: "1px solid #ccc",
    padding: "20px",
}

const Active = () => (
    <>
        <Title/>
        <main style={pageStyle}>
            <h2 style={{ textAlign: "center" }}>Active Investing Page</h2>
            <p style={{ textAlign: "center" }}>Applicable component placeholders imported below.</p>
            <ul id="active" style={listStyle}>
                <li style={component}>
                    <Robinhood />
                </li>
                <li style={component}>
                    <KeyTerms />
                </li>
            </ul>
        </main>
        <Footer />
    </>
)

export default Active;
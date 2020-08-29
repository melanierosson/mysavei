import React from 'react';
import Title from '../components/Title.js';
import MobileApp from '../components/MobileApp.js';
import IndexFunds from '../components/IndexFunds.js';
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

const LongTerm = () => (
    <>
        <Title/>
        <main style={pageStyle}>
            <h2 style={{ textAlign: "center" }}>Long Term Investing Page</h2>
            <p style={{ textAlign: "center" }}>Applicable component placeholders imported below.</p>
            <ul id="active" style={listStyle}>
                <li style={component}>
                    <MobileApp />
                </li>
                <li style={component}>
                    <IndexFunds />
                </li>
            </ul>
        </main>
        <Footer />
    </>
)

export default LongTerm;
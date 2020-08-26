import React from 'react';
import Title from '../components/Title.js';
import KeyTerms from '../components/KeyTerms.js';
import IndexFunds from '../components/IndexFunds.js';
import Robinhood from '../components/Robinhood.js';
import Acorns from '../components/Acorns.js';
import Footer from '../components/Footer.js';

// style variables
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

const All = () => (
    <>
        <Title />
        <main style={pageStyle}>
            <h2>All Resources and Information</h2>
            <ul style={listStyle}>
                <li style={component}>
                    <KeyTerms />
                </li>
                <li style={component}>
                    <Acorns />
                </li>
                <li style={component}>
                    <IndexFunds />
                </li>
                <li style={component}>
                    <Robinhood />
                </li>
            </ul>
        </main>
        <Footer />
    </>
)

export default All;
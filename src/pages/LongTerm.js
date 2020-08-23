import React from 'react';
import Title from '../components/Title.js';
import Acorns from '../components/Acorns.js';
import IndexFunds from '../components/IndexFunds.js';

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
                    <Acorns />
                </li>
                <li style={component}>
                    <IndexFunds />
                </li>
            </ul>
        </main>
    </>
)

export default LongTerm;
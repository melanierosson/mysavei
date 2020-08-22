import React from 'react';
import { Link } from 'react-router-dom';

const optionsList = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: "0",
};
const listLinks = {
    border: "1px solid #000",
    width: "200px",
    height: "200px",
    backgroundColor: "#eee",
    listStyleType: "none",
    listIndent: "none",
    margin: "20px",
    padding: "20px",
    textAlign: "center",
}

const UserOptions = () => (
    <nav>
        <ul style={optionsList}>
            <li style={listLinks}>
                <Link to="/passive">
                    Invest passively, long-term
                </Link>
            </li>
            <li style={listLinks}>
                <Link to="/active">
                    Invest actively in the stock market
                </Link>
            </li>
        </ul>
    </nav>
)

export default UserOptions;
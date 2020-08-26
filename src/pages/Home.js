import React from 'react';
import Title from '../components/Title.js';
import Figure from 'react-bootstrap/Figure';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.js';

// style variables 
const videoFigure = {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    border: "1px solid #000",
    width: "400px",
    height: "250px",
    backgroundColor: "#eee",
};
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
    width: "141px",
    height: "200px",
    backgroundColor: "#92B96A",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.16)",
    listStyleType: "none",
    listIndent: "none",
    margin: "20px",
    padding: "20px",
    textAlign:"center",
}

// home page component
const Home = () => (
    <>
        <Title />
        <main>
            <article className="why-invest">
                <Figure style={videoFigure}>
                    <Figure.Image
                        id="video-intro"
                        width={100}
                        height={100}
                        alt="video placeholder"
                        src="https://img.icons8.com/material-two-tone/96/000000/video.png"
                    />
                    <Figure.Caption>
                        <b>Why Invest?</b> video placeholder
                </Figure.Caption>
                </Figure>
            </article>
            <nav>
                <ul style={optionsList}>
                    <li style={listLinks}>
                        <Link to="/step2">
                            Your personal investment strategy <br />(&lt;2min)
                        </Link>
                    </li>
                    <li style={listLinks}>
                        <Link to="/all">
                            All savings and investment educational resources and tools <br />(&lt;10min)
                        </Link>
                    </li>
                </ul>
            </nav>
        </main>
        <Footer />
    </>
)

export default Home;
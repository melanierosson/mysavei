import React from 'react';
import Title from './Title.js';
import Figure from 'react-bootstrap/Figure';

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
            
        </main>
    </>
)

export default Home;
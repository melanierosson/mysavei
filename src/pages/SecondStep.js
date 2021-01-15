import React, {useState} from 'react';
import Loading from '../components/Loading.js';
import Title from '../components/Title.js';
import UserOptions from '../components/UserOptions.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import '../css/step2.css';

const SecondStep = () => {

    return (
        <Loading>
            <section className="top" style={{ backgroundColor: '#39D08A' }}>
                <Title content="Quick Start Investing" bgColor="#39D08A" 
                />
                <Nav
                    className="hide-on-mobile desktop-nav"
                    bgColor="#39D08A"
                    showDesktop="true"
                    showMobile="false"
                />
            </section>
            
            <main id="step2-page" className="content-page">
                
                <section id="step2-question" className="component-content">
                    <div className="left"></div>
                    <p id="step2-q-text" className="text-center fw-medium">
                        How would you<br/>like to invest?
                    </p>
                    <div className="right"></div>
                </section>

                <UserOptions />

            </main>
            <section 
                className="mobile-nav hide-on-desktop" 
                style={{ backgroundColor: '#39D08A', zIndex: 1000}}
            >
                <Nav 
                    bgColor='#39D08A'
                />
            </section>
            <Footer />
        </Loading>
    )
}

export default SecondStep;
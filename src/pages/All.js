import React, { useState } from 'react';
import Title from '../components/Title.js';
import NeedToKnow from '../components/NeedToKnow.js';
import MobileApp from '../components/MobileApp.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import '../css/all.css';

const All = ({props}) => {

    const [showMobile, displayMobile] = useState(true);
    const [showNeedToKnow, displayNeedToKnow] = useState(true);

    return (
        <section id="app" style={{boxShadow: '0 0 50px rgba(197,226,130,0.5)'}}>
            <section className="top" style={{ backgroundColor: '#A2D039' }}>
                <Title content="Your Investment Strategy" bgColor="#A2D039" />
                <Nav 
                    className="hide-on-mobile desktop-nav" 
                    bgColor="#A2D039" 
                    showDesktop="true"
                    showMobile="false"
                    all="true"
                />
            </section>

            <main className="content-page" id="all-content">
                <section className="content-container" style={{marginTop: '15px'}}>
                    <h2 className="page-title">All Investing Resources</h2>
                    <p className="page-description" style={{marginBottom: '2px'}}>
                        You're interested in knowing more about both passive and active investing.
                    </p>
                </section>
                
                <section id="mobile-apps" className="content-container all-container" style={{
                    marginTop: '30px'}}>
                    {/* <div id="toggle-mobile-apps" onClick={() => displayMobile(showMobile ? false : true)}> */}
                        <h3 className="text-white text-center">
                            {/* { showMobile ? <i className="xs fas fa-chevron-up"></i> : <i className="xs fas fa-chevron-down"></i> } */}
                            &nbsp; Mobile Apps &nbsp; 
                            {/* { showMobile ? <i className="xs fas fa-chevron-up"></i> : <i className="xs fas fa-chevron-down"></i> } */}
                        </h3>
                    {/* </div>
                    <div id="mobileapp-components" style={showMobile ? { display: 'block' } : { display: 'none' }}> */}
                        <MobileApp 
                            type={true} 
                            containAll={true} 
                            expand="See" 
                            // passiveColor="true"
                        />
                        
                        <br /><br />

                        <MobileApp 
                            type={false} 
                            containAll={true} 
                            expand="See" 
                            // activeColor="true"
                        />
                    {/* </div> */}
                </section>
                
                <section id="know" className="content-container all-container" style={{marginTop:'30px', marginBottom: '100px'}}>
                        <h3 className="text-white text-center">
                            &nbsp; Need To Know &nbsp; 
                        </h3>
                        <NeedToKnow 
                            type={true} 
                            showTitle={false}
                            allColor={true}
                        />
                        <br />
                        <NeedToKnow 
                            type={false} 
                            showTitle={false}
                            allColor={true}
                        />
                </section>

            </main>
            <section 
                className="mobile-nav hide-on-desktop" 
                style={{ backgroundColor: '#A2D039', zIndex: 1000}}
            >
                <Nav 
                    bgColor='#A2D039'
                    all='true'
                />
            </section>
            <Footer />
        </section>
    )
}

export default All;
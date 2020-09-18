import React, { useState } from 'react';
import Title from '../components/Title.js';
import NeedToKnow from '../components/NeedToKnow.js';
import MobileApp from '../components/MobileApp.js';
import Footer from '../components/Footer.js';
import '../css/all.css';

const All = ({props}) => {

    const [showMobile, displayMobile] = useState(true);
    const [showNeedToKnow, displayNeedToKnow] = useState(true);

    return (
        <>
            <Title content="Your Investment Strategy" />
            <main class="content-page" id="all-content">

                <section className="content-container">
                    <h2 className="page-title">All Investing Resources</h2>
                    <p className="page-description">
                        You're interested in knowing more about both&nbsp;
                        <span style={{ backgroundColor:'#5DD4CF'}}>passive</span> 
                        &nbsp;and&nbsp;
                        <span style={{ backgroundColor: '#FAD551' }}>active</span>
                        &nbsp;investing.
                    </p>
                </section>
                
                <section id="mobile-apps" class="content-container all-container" style={{
                    marginTop: '30px'}}>
                    <div id="toggle-mobile-apps" onClick={() => displayMobile(showMobile ? false : true)}>
                        <h3>
                            { showMobile ? <i class="xs fas fa-chevron-up"></i> : <i class="xs fas fa-chevron-down"></i> }
                            &nbsp; Mobile Apps &nbsp; 
                            { showMobile ? <i class="xs fas fa-chevron-up"></i> : <i class="xs fas fa-chevron-down"></i> }
                        </h3>
                    </div>
                    <div id="mobileapp-components" style={showMobile ? { display: 'block' } : { display: 'none' }}>
                        <MobileApp type={true} containAll={true} expand="See" />
                        <br /><br />
                        <MobileApp type={false} containAll={true} expand="See" />
                    </div>
                </section>
                
                <section id="know" class="content-container all-container" style={{marginTop:'30px', marginBottom: '100px'}}>
                    <div id="toggle-needtoknow" onClick={() => displayNeedToKnow(showNeedToKnow ? false : true)}>
                        <h3>
                            { showNeedToKnow ? <i class="xs fas fa-chevron-up"></i> : <i class="xs fas fa-chevron-down"></i> }
                            &nbsp; Need To Know &nbsp; 
                            { showNeedToKnow ? <i class="xs fas fa-chevron-up"></i> : <i class="xs fas fa-chevron-down"></i> }
                        </h3>
                    </div>
                    <div id="needtoknow-components" style={showNeedToKnow ? { display: 'block' } : { display: 'none' }}>
                        <NeedToKnow type={true} showTitle={false} />
                        <br />
                        <NeedToKnow type={false} showTitle={false} />
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default All;
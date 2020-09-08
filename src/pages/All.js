import React, { useState } from 'react';
import Title from '../components/Title.js';
import NeedToKnow from '../components/NeedToKnow.js';
import MobileApp from '../components/MobileApp.js';
import Footer from '../components/Footer.js';


const All = ({props}) => {

    const [showMobile, displayMobile] = useState(true);
    const [showNeedToKnow, displayNeedToKnow] = useState(true);

    return (
        <>
            <Title />
            <main class="content-page" id="all-content">
                <h2 className="subtitle">All Resources and Information</h2>

                <section id="mobile-apps" class="bordered all-container">
                    <div id="toggle-mobile-apps" onClick={() => displayMobile(showMobile ? false : true)}>
                        <h3>
                            { showMobile ? <i class="xs fas fa-chevron-up"></i> : <i class="xs fas fa-chevron-down"></i> }
                            &nbsp; Mobile Apps &nbsp; 
                            { showMobile ? <i class="xs fas fa-chevron-up"></i> : <i class="xs fas fa-chevron-down"></i> }
                        </h3>
                    </div>
                    <div id="mobileapp-components" style={showMobile ? { display: 'block' } : { display: 'none' }}>
                        <MobileApp type={true} containAll={true} expand="See more" />
                        <br /><br />
                        <MobileApp type={false} containAll={true} expand="See more" />
                    </div>
                </section>
                
                <section id="know" class="bordered all-container" style={{marginTop:'30px', marginBottom: '100px'}}>
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
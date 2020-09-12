import React, { useState } from 'react';
import AcornsImg from '../imgs/acorns.png';
import RobinhoodImg from '../imgs/robinhood.png';
import AppStoreIcons from './AppStoreIcons.js';



const MobileApp = ({type, containAll, containDescr, expand}) => {

    const [showContent, displayContent] = useState(true);

    return (
        <article id="mobile-app" className="row component-content mobile-app">
            {/* modal for app stores */}
            <AppStoreIcons id="app-store-modal" type={type ? true : false} />

            <section className="img-container col-12 col-md-3" onClick={() => document.getElementById('app-store-icons').style.display = "block"}>
                <div className="img-holder">
                    <img 
                        className="app-icons" 
                        src={ type ? AcornsImg : RobinhoodImg } 
                        onClick={() => document.getElementById('app-store-icons').style.display = "block"} />
                </div>
            </section>

            <section className={`about-mobile-app col-12 col-md-9 ${ containAll ? 'dropdown-start' : '' }`}>
                <div className="mobile-app-title" onClick={() => document.getElementById('app-store-icons').style.display = "block"}>
                    <h4 className="mobile-app-title"><span className="type">{ type ? 'Acorns' : 'Robinhood' }</span> mobile app</h4>
                </div>
                <div className={`mobile-app-descr ${ containDescr ? 'dropdown-start' : '' }`}>
                    { type 
                        ? 'The Acorns mobile app makes passive investing as easy as possible.' 
                        : 'The Robinhood mobile app is an in-pocket, no-fee, stock market broker tool.' 
                    }
                    <div className="price" style={showContent ? { display: 'none' } : { display: 'block', padding: '5px', border: '3px solid rgba(255,255,255,0.16)', marginTop:'10px' }}>
                        <i className="fas fa-dollar-sign"></i> &nbsp;
                        {type ?
                            'All accounts are extremely affordable, with the most expensive, “Family”, being only $5 a month.'
                            :
                            'FREE! No fees until you transfer funds back to your checking account, then it’s $75 (so you only want to do this once you have a large chunk of profit to transfer). '
                        }
                    </div>
                </div>
                <div className="expand" onClick={() => displayContent(showContent ? false : true)}>
                    {expand} &nbsp; {showContent ? <i className="xs fas fa-chevron-down"></i> : <i className="xs fas fa-chevron-up"></i>}
                </div>
            </section>
        </article>
)}

export default MobileApp;
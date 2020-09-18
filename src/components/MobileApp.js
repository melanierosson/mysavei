import React, { useState } from 'react';
import AcornsImg from '../imgs/acorns.png';
import RobinhoodImg from '../imgs/robinhood.png';
import ModalAcorns from './ModalAcorns.js';
import ModalRobinhood from './ModalRobinhood.js';



const MobileApp = ({type, containAll, containDescr, expand}) => {

    const [showContent, displayContent] = useState(true);

    return (
        <article id="mobile-app" className="row component-content mobile-app">
            {/* modal for app stores */}
            <ModalAcorns />
            <ModalRobinhood />

            <section className="img-container col-12 col-md-3" onClick={type ?
                () => document.getElementById('acorns-store-icon').style.display = "block"
                :
                () => document.getElementById('robinhood-store-icon').style.display = "block"
            }>
                <div className="img-holder">
                    <img 
                        className="app-icons" 
                        src={ type ? AcornsImg : RobinhoodImg } 
                        onClick={ type ?
                            () => document.getElementById('acorns-store-icon').style.display = "block"
                        :
                            () => document.getElementById('robinhood-store-icon').style.display = "block"
                        } />
                </div>
            </section>

            <section className={`about-mobile-app col-12 col-md-9 ${containAll ? 'dropdown-start' : ''} ${showContent ? 'closed' : 'opened'}`} style={type ? { zIndex: '5' } : { zIndex: '3'}}>
                <div className="mobile-app-title" onClick={type ?
                    () => document.getElementById('acorns-store-icon').style.display = "block"
                    :
                    () => document.getElementById('robinhood-store-icon').style.display = "block"
                } >
                    <h4 className="mobile-app-title"><span className="type">{ type ? 'Acorns' : 'Robinhood' }</span> mobile app</h4>
                </div>
                <div className={`mobile-app-descr ${containDescr ? 'dropdown-start' : ''} ${showContent ? 'closed' : 'opened'}`} style={showContent ? {height: '124px'} : {height: '257px'}}>
                    { type 
                        ? 'The Acorns mobile app makes passive investing as easy as possible.' 
                        : 'The Robinhood mobile app is an in-pocket, no-fee, stock market broker tool.' 
                    }
                    <div className="price" style={ showContent ? { display: 'none' } : { display: 'block' } }>
                        <div className="cost">
                            {type ?
                                <span className="cost-descr">
                                    All accounts are extremely affordable<br />($1-$5 a month)
                                </span>
                                :
                                <span className="cost-descr">
                                    Free unless you upgrade (Gold or Premium accounts) or transfer funds back to your bank account ($75 flat fee)
                                </span>
                            }
                            <div className="get-app">
                                {type ?
                                    <span onClick={() => document.getElementById('acorns-store-icon').style.display = "block"}>
                                        <b>Get the <span className="hide-xs">Acorns</span> app</b> <i class="fas fa-angle-double-right"></i>
                                    </span>
                                    :
                                    <span onClick={() => document.getElementById('robinhood-store-icon').style.display = "block"}>
                                        <b>Get the <span className="hide-xs">Robinhood</span> app</b> <i class="fas fa-angle-double-right"></i>
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="expand" onClick={() => displayContent(showContent ? false : true)}>
                    {expand}&nbsp;{showContent ? <span>more &nbsp;<i className="xs fas fa-chevron-down"></i></span> : <span>less &nbsp;<i className="xs fas fa-chevron-up"></i></span>}
                </div>
            </section>
        </article>
)}

export default MobileApp;
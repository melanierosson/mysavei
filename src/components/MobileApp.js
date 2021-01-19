import React, { useState } from 'react';
import AcornsImg from '../imgs/acorns.png';
import RobinhoodImg from '../imgs/robinhood.png';
import ModalAcorns from './ModalAcorns.js';
import ModalRobinhood from './ModalRobinhood.js';



const MobileApp = ({type, containAll, containDescr, expand, activeColor, passiveColor}) => {

    const [showContent, displayContent] = useState(true);

    const showAcornsModal = () => {
        document.getElementById('acorns-store-icon').style.display = "block";
        modalExitClick();
    }
    const showRobinhoodModal = () => {
        document.getElementById('robinhood-store-icon').style.display = "block";
        modalExitClick();
    }
    const hideModals = () => {
        document.getElementById('acorns-store-icon').style.display = "none";
        document.getElementById('robinhood-store-icon').style.display = "none";
        document.getElementById('modal-overlay').removeEventListener("click", hideModals, false);
        document.getElementById('modal-overlay').style.display = "none";
    }
    const modalExitClick = () => {
        document.getElementById('modal-overlay').addEventListener("click", hideModals, false);
        document.getElementById('modal-overlay').style.display = "block";
    }

    return (
        <article id="mobile-app" className="row component-content mobile-app">

            <div id="modal-overlay"></div>
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
                        alt={type ? 'Acorns mobile app icon' : 'Robinhood mobile app icon'}
                        onClick={ type ?  showAcornsModal : showRobinhoodModal } />
                </div>
            </section>

            <section className={`about-mobile-app col-12 col-md-9 ${containAll ? 'dropdown-start' : ''} ${showContent ? 'closed' : 'opened'} ${activeColor ? 'active-color' : ''} ${passiveColor ? 'passive-color' : ''}`} style={type ? { zIndex: '9' } : { zIndex: '8'}}>
                <div className="mobile-app-title">
                    <h4 className="mobile-app-title"><span className="type">{ type ? 'Acorns' : 'Robinhood' }</span> mobile app</h4>
                </div>
                <div 
                    className={`mobile-app-descr ${containDescr ? 'dropdown-start' : ''} ${showContent ? 'closed' : 'opened'} ${activeColor ? 'active-color' : ''} ${passiveColor ? 'passive-color' : ''}`} 
                    style={showContent ? {height: '124px'} : {height: '257px'}}
                    onMouseOver={() => displayContent()}
                    onMouseOut={() => displayContent(showContent ? false : true)}
                >
                    { type 
                        ? 'The Acorns mobile app makes passive investing as easy as possible.' 
                        : 'The Robinhood mobile app is an in-pocket, no-fee, stock market broker tool.' 
                    }
                    <div className="price" style={ showContent ? { display: 'none' } : { display: 'block' } }>
                        <div className="cost">
                            {type ?
                                <span className="cost-descr">
                                    All accounts are extremely affordable, ranging between $1-$5 a month depending on the plan
                                </span>
                                :
                                <span className="cost-descr">
                                    Free unless you upgrade (Gold or Premium accounts) or transfer funds back to your bank account ($75 flat fee)
                                </span>
                            }
                            <div className="get-app" onClick={modalExitClick}>
                                {type ?
                                    <span onClick={showAcornsModal}>
                                        <b>Get the <span className="hide-xs">Acorns</span> app</b>
                                    </span>
                                    :
                                    <span onClick={showRobinhoodModal}>
                                        <b>Get the <span className="hide-xs">Robinhood</span> app</b>
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div 
                    className={`expand ${activeColor ? 'active-color' : ''} ${passiveColor ? 'passive-color' : ''}`} 
                    onClick={() => displayContent(showContent ? false : true)}
                    onMouseOver={() => displayContent()}
                    onMouseOut={() => displayContent(showContent ? false : true)}
                >
                    {expand}&nbsp;{showContent ? <span>more &nbsp;<i className="xs fas fa-chevron-down"></i></span> : <span>less &nbsp;<i className="xs fas fa-chevron-up"></i></span>}
                </div>
            </section>
        </article>
)}

export default MobileApp;
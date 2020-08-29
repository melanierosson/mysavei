import React, { useState } from 'react';

import AcornsImg from '../imgs/acorns.png';
import RobinhoodImg from '../imgs/robinhood.png';



const MobileApp = ({type, containAll, containDescr, expand}) => {

    return (
        <article id="mobile-app" className="row component-content mobile-app">
            <section className="img-container col-12 col-md-3">
                <div className="img-holder">
                    <img className="app-icons" src={type ? AcornsImg : RobinhoodImg} />
                </div>
            </section>
            <section className={`about-mobile-app col-12 col-md-9 ${ containAll ? 'dropdown-start' : '' }`}>
                <div class="mobile-app-title">
                    <b><span className="type">{ type ? 'Acorns' : 'Robinhood' }</span> mobile app</b>
                </div>
                <div class={`mobile-app-descr ${ containDescr ? 'dropdown-start' : '' }`}>
                    { type 
                        ? 'The Acorns mobile app makes passive investing as easy as possible.' 
                        : 'The Robinhood mobile app is an in-pocket, no-fee, stock market broker tool.' 
                    }
                </div>
                <div className="expand">
                    {expand}
                </div>
            </section>
        </article>
)}

export default MobileApp;
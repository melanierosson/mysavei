import React from 'react';
import AcornsImg from '../imgs/acorns.png';

const ModalAcorns = () => {

    return (
        <section id="acorns-store-icon" className="text-center" style={{display:'none'}}>
            <div className="close" onClick={() => document.getElementById('acorns-store-icon').style.display = "none"}>
                <i className="fas fa-times"></i>
            </div>
            <h5>Install</h5>
            <section className="img-container col-12">
                <img className="app-icons" src={AcornsImg} alt="Acorns app"/>
            </section>
                
            <div className="apps">
                <a className="app-store-link google" href='https://play.google.com/store/apps/details?id=com.acorns.android' target='_blank' style={{ padding: '5px 10px 5px 20px' }}>
                    <i className="fab fa-google-play"></i><br />
                    <span className="google-link">Google Play</span>
                </a>
                <a className="app-store-link apple" href='https://apps.apple.com/us/app/acorns-invest-spare-change/id883324671' target='_blank' style={{ padding: '5px 20px 5px 10px' }}>
                    <i className="fab fa-apple"></i><br />
                    <span className="apple-link">Apple Store</span>
                </a>
            </div>
        </section>
    )
}

export default ModalAcorns;
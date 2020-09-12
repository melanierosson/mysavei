import React from 'react';

const AppStoreIcons = ({type}) => {

    return (
        <section id="app-store-icons" className="text-center" style={{display:'none'}}>
            <div id="close" onClick={() => document.getElementById('app-store-icons').style.display = "none"}>
                <i className="fas fa-times"></i>
            </div>
            <h5>Which app store?</h5>
            <div className="apps">
                {type ?
                    <>
                        <a className="app-store-link google" href='https://play.google.com/store/apps/details?id=com.acorns.android' target='_blank' style={{ padding: '5px 10px 5px 20px' }}>
                            <i className="fab fa-google-play"></i><br />
                            <span className="google-link">Google Play</span>
                        </a>
                        <a className="app-store-link apple" href='https://apps.apple.com/us/app/acorns-invest-spare-change/id883324671' target='_blank' style={{ padding: '5px 20px 5px 10px' }}>
                            <i className="fab fa-apple"></i><br />
                            <span className="apple-link">Apple Store</span>
                        </a>
                    </>
                    :
                    <>
                        <a className="app-store-link google" href='https://play.google.com/store/apps/details?id=com.robinhood.android' target='_blank' style={{ padding: '5px 10px 5px 20px' }}>
                            <i className="fab fa-google-play"></i><br />
                            <span className="google-link">Google Play</span>
                        </a>
                        <a className="app-store-link apple" href='https://apps.apple.com/us/app/robinhood-invest-save-earn/id938003185' target='_blank' style={{ padding: '5px 20px 5px 10px' }}>
                            <i className="fab fa-apple"></i><br />
                            <span className="apple-link">Apple Store</span>
                        </a>
                    </>
                }
            </div>
        </section>
    )
}

export default AppStoreIcons;
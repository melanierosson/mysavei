import React, { useState } from 'react';
import ContentAcorns from './ContentAcorns.js';
import ContentStocks from './ContentStocks.js';

const NeedToKnow = ({type, showTitle, passiveColor, activeColor, allColor}) => {

    const [showContent, displayContent] = useState(true);

    let findColor = () => {
        if (passiveColor) { return ('#5DD4CF') };
        if (activeColor) { return ('#FAD551') };
        if (allColor) { return ('#A2D039') }
    }
    let pageColor = {
        color: findColor(),
    }
    // pageColor();

    return (
        <article id="need-to-know" 
            className={`component-content need-to-know`}
        >
            <section className="need-to-know">
                <div id="needtoknow-header" onClick={() => displayContent(showContent ? false : true)}>
                    { showTitle ? 
                        < h4 className="text-center" style={{marginBottom:'15px'}}>Need To Know</h4>
                    : '' }

                    <h5 className="text-center">

                        { showContent ? 
                            <i className="xs fas fa-chevron-up" style={pageColor}></i> : 
                            <i className="xs fas fa-chevron-down" style={pageColor}></i> 
                        }

                        &nbsp; &nbsp; {type ? 'Acorns Features' : 'Stock Market'} &nbsp; &nbsp;

                        { showContent ? 
                            <i className="xs fas fa-chevron-up" style={pageColor}></i> : 
                            <i className="xs fas fa-chevron-down" style={pageColor}></i> 
                        }

                    </h5>
                </div>
                

                <div id="needtoknow-content" style={showContent ? { display: 'block' } : { display: 'none' }}>

                    <p className="text-center">{type ?
                        'A little more detail about the Acorns mobile app features and benefits.' :
                        'Terms you need to know to start short-term or long-term trading on the stock market via the Robinhood app.'
                    }
                    </p>

                    {type ? <ContentAcorns /> : <ContentStocks />}

                </div>
                
            </section>
        </article>
    )
}

export default NeedToKnow;
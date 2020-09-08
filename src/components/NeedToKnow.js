import React, { useState } from 'react';
import ContentAcorns from './ContentAcorns.js';
import ContentStocks from './ContentStocks.js';

const NeedToKnow = ({type, showTitle}) => {

    const [showContent, displayContent] = useState(true);

    return (
        <article id="need-to-know" className="component-content need-to-know">
            <section className="col-12">
                <div id="needtoknow-header" onClick={() => displayContent(showContent ? false : true)}>
                    { showTitle ? 
                        < h4 className="text-center">Need To Know</h4>
                    : '' }

                    <h5 className="text-center">
                        { showContent ? <i class="xs fas fa-chevron-up"></i> : <i class="xs fas fa-chevron-down"></i> }

                    &nbsp; {type ? 'Acorns Features' : 'Stock Market'} &nbsp;

                    { showContent ? <i class="xs fas fa-chevron-up"></i> : <i class="xs fas fa-chevron-down"></i> }
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
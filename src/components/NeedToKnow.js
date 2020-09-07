import React from 'react';
import ContentAcorns from './ContentAcorns.js';
import ContentStocks from './ContentStocks.js';

const NeedToKnow = ({type, showTitle}) => (
    <article id="need-to-know" className="component-content need-to-know">
        <section className="col-12">
            { showTitle ? <h4 className="text-center">Need To Know</h4> : '' }
            <h5 className="text-center">{ type ? 'Acorns Features' : 'Stock Market' }</h5>
            <p>{ type ? 
                'A little more detail about the Acorns mobile app features and benefits.' : 
                'Terms you need to know to start short-term or long-term trading on the stock market via the Robinhood app.'
                }
            </p>
            { type ? <ContentAcorns/> : <ContentStocks/> }
        </section>
    </article>
)

export default NeedToKnow;
import React from 'react';
// images
import stockImg from '../imgs/active/stock-etf.PNG';
import marketImg from '../imgs/active/market-price.PNG';
import fractionalImg from '../imgs/active/fractional-share.PNG';
import limitImg from '../imgs/active/limit-price.PNG';
import cryptoImg from '../imgs/active/crypto.png';
import indexImg from '../imgs/active/indexes.PNG';
import dividendImg from '../imgs/active/dividends.PNG';
import autoDepositImg from '../imgs/active/auto-deposits.png';

const ContentStocks = () => (
    <ul className="stock-market need-to-know list">
        <li>
            <p>
                <b>Stock/ETF:</b> A stock is a portion of ownership in a company while an ETF is an exchange traded fund. Both are traded on the stock market and are similar (to beginning traders).
            </p>
            <img src={stockImg} />
        </li>
        <li>
            <p>
                <b>Market Price:</b> Current selling price for a single share of a stock/ETF.
            </p>
            <img src={marketImg} />
        </li>
        <li>
            <p>
                <b>Fractional Shares:</b> Partial, or less than a single share of stock.
            </p>
            <img src={fractionalImg} />
        </li>
        <li>
            <p>
                <b>Limit Order:</b> Purchasing of stock only once it lowers to a set price point. You can’t do this with fractional shares.
            </p>
            <img src={limitImg} />
        </li>
        <li>
            <p>
                <b>Crypto:</b> Blockchain and virtual currency funds like Bitcoin and Ethereum.
                These are only available to be traded within certain states in Robinhood. 
                <a className="link" href="https://robinhood.com/us/en/support/articles/commission-free-cryptocurrency-investing/" target="_blank">See more <i class="fas fa-chevron-right"></i></a>
            </p>
            <img src={cryptoImg} />
        </li>
        <li style={{ flexDirection: 'column' }}>
            <div className="col-12 listImgStyle">
                <p>
                    <b>Index Funds:</b> A collection of partial shares of various stock, usually sharing a similarity of some sort.
                    <br /><br/><b>Some key players:</b>
                </p>
                <img src={indexImg} />
            </div>
            
            <div className="col-12" style={{paddingBottom:'20px'}}>
                <ul className="sublist">
                    <li>
                        <p>
                            <b>QQQ:</b> Represents the <a href="#nasdaq">NASDAQ</a> 100, comprised of tech companies like Apple, Facebook, Google and Amazon.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>NOBL:</b> “<a href="#spgi">S&amp;P</a> <a href="#dividends">Dividend</a> Aristocrats” – Also known as all the large companies that have historically paid out regular, solid dividends to its shareholders.
                        </p>

                    </li>
                    <li>
                        <p>
                            <b>BRK.B:</b> This is not an index fund but it is similar. Berkshire Hathaway is Warren Buffet’s company that holds all of his hand-picked stocks. (Warren Buffet is known for basically being the king of all stock trading.)
                        </p>
                    </li>
                </ul>
                <b><i class="fas fa-star"></i> Index funds are by the far the safest way to invest your money, long-term in the stock market for guaranteed profits.</b>
            </div>
        </li>
        <li style={{ flexDirection: 'column' }}>
            <div className="col-12 listImgStyle">
                <p id="dividends">
                    <b>Dividends: </b>
                    Portions of profit that the company will pay its shareholders (this might be done regularly or just one-time).
                </p>
                <img src={dividendImg} />
            </div>
            <div className="col-12" style={{ paddingBottom: '20px' }}>
                <ul className="sublist">
                    <li>
                        <p>
                            In the <b>Stats</b> section of the mobile app, this is represented by the <b>Div/Yield</b> number. (A dash means the stock doesn’t pay out dividends.)
                        </p>
                    </li>
                    <li>
                        <p>
                            Robinhood has an <b>automatic reinvestment feature</b> called DRIP that allows you to choose to have your dividends from a stock/ETF be automatically reinvested back in that stock/ETF.
                            <a className="link" href="https://robinhood.com/us/en/support/articles/dividend-reinvestment/" target="_blank">
                                See more <i class="fas fa-chevron-right"></i>
                            </a>
                        </p>
                    </li>
                </ul>
            </div>
        </li>
        <li>
            <p>
                <b>Automatic Deposits:</b> You can choose to automatically deposit a certain amount to your investing account on a regular basis. (This is beneficial for limiting yourself or insuring that you always have funds to trade.)
            </p>
            <img src={autoDepositImg} />
        </li>
        <li>
            <p>
                Some other less-important key terms:
                <ul className="sublist">
                    <li id="spgi">S&amp;P 500: Group of the 500 largest companies on the U.S. stock exchange.</li>
                    <li id="nyse">NYSE:</li>
                    <li id="nasdaq">NASDAQ:</li>
                </ul>
            </p>
        </li>
    </ul>
)

export default ContentStocks;
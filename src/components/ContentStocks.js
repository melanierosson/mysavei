import React, {useState} from 'react';
// images
import stockImg from '../imgs/active/stock-etf.jpg';
import marketImg from '../imgs/active/market-price.jpg';
import fractionalImg from '../imgs/active/fractional-share.jpg';
import limitImg from '../imgs/active/limit-price.jpg';
import cryptoImg from '../imgs/active/crypto.jpg';
import indexImg from '../imgs/active/indexes.jpg';
import dividendImg from '../imgs/active/dividends.jpg';
import autoDepositImg from '../imgs/active/auto-deposits.jpg';

const ContentStocks = ({highlight}) => {

    const [showContent, displayContent] = useState(false);

    return (
    <ul className="stock-market need-to-know list">
        <li>
            <p>
                <b>Stock/ETF:</b> A stock is a portion of ownership in a company while an ETF is an exchange traded fund. Both are traded on the stock market and are similar (to beginning traders).
            </p>
            <img src={stockImg} alt="Users total investing graph in Robinhood"/>
        </li>
        <li>
            <p>
                <b>Market Price:</b> Current selling price for a single share of a stock/ETF.
            </p>
            <img src={marketImg} alt="Twitter's (TWTR) market price in Robinhood"/>
        </li>
        <li>
            <p>
                <b>Fractional Shares:</b> Partial, or less than a single share of stock.
            </p>
                <img src={fractionalImg} alt="Twitter (TWTR) fractional share purchase in Robinhood"/>
        </li>
        <li>
            <p>
                <b>Limit Order:</b> Purchasing of stock only once it lowers to a set price point. You can’t do this with fractional shares.
            </p>
            <img src={limitImg} alt="Order form for placing a limit order in Robinhood"/>
        </li>
        <li>
            <p>
                <b>Crypto:</b> Blockchain and virtual currency funds like Bitcoin and Ethereum.
                These are only available to be traded within certain states in Robinhood. 
                <a className="link" href="https://robinhood.com/us/en/support/articles/commission-free-cryptocurrency-investing/" target="_blank">See more <i className="fas fa-chevron-right"></i></a>
            </p>
            <img src={cryptoImg} alt="Crypto Bitcoin graph in Robinhood" />
        </li>
        <li style={{ flexDirection: 'column', backgroundColor: 'rgba(250,213,81,0.2)' }}>
            <div className="listImgStyle">
                <p>
                    <b>Index Funds:</b> A collection of partial shares of various stock, usually sharing a similarity of some sort.
                    <br /><br className="hide-on-mobile"/>
                    <b 
                        className="link hide-on-mobile" 
                        onClick={() => displayContent(showContent ? false : true)}
                    >
                            See 
                            {showContent ? ' less ' : ' some '} 
                            key players &nbsp;
                        {showContent ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-right"></i>}
                    </b>
                </p>
                <img src={indexImg} alt="A few index fund key players on Robinhood" />
            </div>
            
            <div style={{paddingBottom:'20px', paddingLeft: '0', paddingTop: '10px'}}>
                <b 
                    className="link hide-on-desktop" 
                    onClick={() => displayContent(showContent ? false : true)}
                    style={{paddingBottom: '20px', marginTop:'-10px'}}
                >
                    See
                        {showContent ? ' less ' : ' some '}
                        key players &nbsp;
                    {showContent ? <i className="fas fa-chevron-up" style={{paddingBottom:'20px'}}></i> : <i className="fas fa-chevron-right"></i>}
                </b>
                <ul className="sublist" style={showContent ? { display: 'block' } : { display: 'none' }}>
                    <li id="spgi">
                        <p>
                            <b>S&amp;P 500:</b> Group of the 500 largest companies on the U.S. stock exchange. It's <a href="#symbols">stock symbol</a> is GSPC, but is not available to purchase on Robinhood.
                        </p>
                    </li>
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
                <b style={{fontSize:'1.195rem'}}><i className="fas fa-star"></i> Index funds are by the far the safest way to invest your money, long-term in the stock market for guaranteed profits.</b>
            </div>
        </li>
        <li style={{ flexDirection: 'column' }}>
            <div className="col-12 listImgStyle">
                <p id="dividends">
                    <b>Dividends: </b>
                    Portions of profit that the company will pay its shareholders (this might be done regularly or just one-time).
                </p>
                <img src={dividendImg} alt="Stats area in Robinhood with the Div/Yield area in focus"/>
            </div>
            <div className="col-12" style={{ paddingBottom: '20px', paddingLeft: '0' }}>
                <ul className="sublist">
                    <li>
                        <p>
                            In the <b>Stats</b> section of the mobile app, this is represented by the <b>Div/Yield</b> number. (A dash means the stock doesn’t pay out dividends.)
                        </p>
                    </li>
                    <li>
                        <p>
                            Robinhood has an <b>automatic dividends reinvestment feature</b> called DRIP that allows you to choose to have your dividends from a stock/ETF be automatically reinvested back in that stock/ETF.
                            <a className="link" href="https://robinhood.com/us/en/support/articles/dividend-reinvestment/" target="_blank">
                                See more <i className="fas fa-chevron-right"></i>
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
            <img src={autoDepositImg} alt="Schedule Automatic Deposits button under the Transfers area of Robinhood"/>
        </li>
        <li style={{flexDirection:'column', alignItems:'flex-start'}}>
            <p style={{marginBottom:'0', marginTop:'30px'}}>
                <b>Less-Important Key Terms:</b>
                <br /><br className="hide-on-desktop"/>
                <ul className="sublist">
                    <li id="nyse">
                        <p>
                            <b>NYSE:</b> Stock exchange known for being composed of the more long-established, stable companies, therefore their stocks tend to be safer but not always as profitable.
                    </p>
                    </li>
                    <li id="nasdaq">
                        <p>
                            <b>NASDAQ:</b> Stock exchange known for being composed of newer, larger tech-related companies, and their stocks tend to move faster and swing larger (less safe but this means they might be more profitable).
                        </p>
                    </li>
                    <li id="symbols">
                        <p style={{ marginBottom: '0' }}>
                            <b>Stock Symbols:</b> Also known as "Ticker Symbols" or company abbreviations. These uppercase characters are just a shorthand way to represent the company on the stock exchange. There's not a significant or consistent reason why some companies use 2 letters versus 3+. (e.g. TWTR, NFLX, BAC, FB)
                        </p>
                    </li>
                </ul>
            </p>
        </li>
    </ul>
)}

export default ContentStocks;
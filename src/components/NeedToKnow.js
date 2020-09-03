import React from 'react';

const NeedToKnow = ({type, showTitle}) => (
    <article id="need-to-know" className="component-content need-to-know">
        <section className="col-12">
            { showTitle ? <h4>Need To Know</h4> : '' }
            <h5>{ type ? 'Acorns Features' : 'Stock Market' }</h5>
            <p>{ type ? 
                'A little more detail about Acorns features that you won\'t see on their website.' : 
                'Terms you need to know to start short-term or long-term trading on the stock market via the Robinhood app.'
                }
            </p>
            { type ? 
                <ul className="acorns">
                    <li>
                        When you setup a reoccurring deposit for one of your investment accounts, Acorns will show you a graphed, calculated prediction of what your investing savings will grow to after a certain amount of years. This is incredibly motivating when just getting started!
                    </li>
                    <li>Round-Ups: Link your various checking, savings, or credit accounts and have any purchases you make round up to the nearest dollar (or specified amount) and that round-up change will deposit to your investment (“Invest”) account. You can choose your investments from their pre-set portfolios or they will default you to a suggested portfolio.</li>
                    <li>Later Account: Optional retirement investment account. (Similar to an employer’s 401K but is an IRA.)</li>
                    <li>Early Account: Optional trust fund investment account for children. This is NOT the same as a 529 College Savings account, and on its own CAN disqualify a child from being eligible for Financial Aid, but allows you to use the funds on anything that might benefit the child.</li>
                </ul>
             :
                <ul className="stock-market">
                    <li>
                        Stock/ETF: A stock is a portion of ownership in a company while an ETF is an exchange traded fund. Both are traded on the stock market and are similar (to beginning traders).
                    </li>
                    <li>
                        Fractional Shares: Partial, or less than a single share of stock.
                    </li>
                    <li>
                        Limit Order: Purchasing of stock only once it hits a set price point. You can’t do this with fractional shares.
                    </li>
                    <li>
                        Market Price: Current selling price for a single share of a stock/ETF.
                    </li>
                    <li>
                        Crypto: Blockchain and virtual currency funds like Bitcoin and Ethereum.
                        These are only available to be traded within certain states in Robinhood.
                        <a href="https://robinhood.com/us/en/support/articles/commission-free-cryptocurrency-investing/" target="_blank">See more...</a>
                    </li>
                    <li>
                        Index Funds: A collection of partial shares of various stock, usually sharing a similarity of some sort.
                        <br />Some key players:
                        <ul className="index-funds-list">
                            <li>
                                S&amp;P 500: Group of the 500 largest companies on the U.S. stock exchange.
                            </li>
                            <li>
                                QQQ: Represents the NASDAQ 100, comprised of tech companies like Apple, Facebook, Google and Amazon.
                            </li>
                            <li>
                                NOBL: “S&amp;P Dividend Aristocrats” – Also known as all the large companies that have historically paid out regular, solid dividends to all of its shareholders
                            </li>
                            <li>
                                BRK.B: This is not an index fund but it is similar. Berkshire Hathaway is Warren Buffet’s company that holds all of his hand-picked stocks. (Warren Buffet is known for basically being the king of all stock trading.)
                            </li>
                        </ul>
                        Index funds are by the far the safest way to invest your money long-term in the stock market for guaranteed profits.
                    </li>
                    <li>
                        Dividends: profit that the company will pay its shareholders (this might be done regularly or just one-time).
                        <ul className="dividends-list">
                            <li>In the “Stats” section of the mobile app, this is represented by the Div/Yield number. (A dash means the stock doesn’t pay out dividends.)</li>
                            <li>
                                Robinhood has an automatic reinvestment feature called DRIP that allows you to choose to have your dividends from a stock/ETF be automatically reinvested back in that stock. 
                                <a href="https://robinhood.com/us/en/support/articles/dividend-reinvestment/" target="_blank">
                                    See more...
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Re-Occurring Deposits: You can choose to automatically deposit a certain amount to your investment account on a regular basis. (This is good to limit yourself or insure that you always have funds to trade.)
                    </li>
                </ul>
            }
        </section>
    </article>
)

export default NeedToKnow;
import React from 'react';
// images
import roundupsImg from '../imgs/passive/roundup.jpg';
import recurringImg from '../imgs/passive/recurring.jpg';
import predictImg from '../imgs/passive/predict.jpg';
import laterImg from '../imgs/passive/later.jpg';
import earlyImg from '../imgs/passive/early.jpg';

const ContentAcorns = () => (
    <ul className="acorns need-to-know list">
        <li>
            <p>
                <b>Round-Ups:</b> Link your various checking, savings, or credit accounts and have any purchases you make round up to the nearest dollar (or specified amount). That round-up change will deposit to your investment (“Invest”) account. You can choose your investments from their pre-set portfolios or they will default you to a suggested portfolio.
            </p>
            <img src={roundupsImg} alt="Image of the total and most recent roundup purchases in the Acorns mobile app" />
        </li>
        <li>
            <p>
                <b>Recurring Investment:</b> You can choose to automatically deposit a certain amount to (one of) your specified investment savings account(s) on a regular basis. This is the most effective form of passive investment savings.
            </p>
            <img src={recurringImg} alt="Image of the Reincurring Investment options in Acorns"/>
        </li>
        <li>
            <p>
                <b>Potential Savings Graph:</b> When you click on the chart icon in the top-right corner of the mobile app, Acorns will show you a graphed, calculated prediction of what your investment savings accounts might grow to after a certain amount of years. It also separates the predicted "Return" (your profit) versus your "Investment" (deposited funds). This is incredibly motivating!
            </p>
            <img src={predictImg} alt="Image of Acorn's Potential Savings Graph feature that can be viewed for every account you setup a reoccurring investment for"/>
        </li>
        <li>
            <p>
                <b>Later Account:</b> Optional investment account specifically for retirement. (Similar to an employer’s 401K retirement plan but is an individual IRA account.)
            </p>
            <img src={laterImg} alt="Image of Later account preview in Acorns"/>
        </li>
        <li>
            <div style={{flexDirection:'column'}}>
                <p style={{ marginBottom: '5px' }}>
                    <b>Early Account:</b> Optional trust fund investment account for children.
                </p>
                <p style={{marginBottom:'5px', fontWeight:'500'}}>
                    <i>This is NOT the same as a 529 College Savings account. An "Early Account" balance can disqualify a child from being eligible for Financial Aid while a 529 account balance cannot.</i> 
                </p>
                <p>
                    That said, unlike a 529 Account, it allows you to use the funds on anything that might benefit the child - not just education-related expenses.
                </p>
            </div>
            <img src={earlyImg} alt="Image of Early account overview for child named Dax in the Acorns app"/>
        </li>
    </ul>
)

export default ContentAcorns;
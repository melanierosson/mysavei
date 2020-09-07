import React from 'react';
// images
import roundupsImg from '../imgs/passive/roundup.png';
import recurringImg from '../imgs/passive/recurring.png';
import predictImg from '../imgs/passive/predict.png';
import laterImg from '../imgs/passive/later.png';
import earlyImg from '../imgs/passive/early.png';

const ContentAcorns = () => (
    <ul className="acorns need-to-know list">
        <li>
            <p>
                <b>Round-Ups:</b> Link your various checking, savings, or credit accounts and have any purchases you make round up to the nearest dollar (or specified amount) and that round-up change will deposit to your investment (“Invest”) account. You can choose your investments from their pre-set portfolios or they will default you to a suggested portfolio.
            </p>
            <img src={roundupsImg} />
        </li>
        <li>
            <p>
                <b>Recurring Deposits:</b> You can choose to automatically deposit a certain amount to your specified investment savings account on a regular basis. This is the most effective form of passive investment savings.
            </p>
            <img src={recurringImg} />
        </li>
        <li>
            <p>
                <b>Predicted Savings Graph:</b> When you setup a recurring deposit for one of your investment accounts, Acorns will show you a graphed, calculated prediction of what your investing savings will grow to after a certain amount of years. This is incredibly motivating!
            </p>
            <img src={predictImg} />
        </li>
        <li>
            <p>
                <b>Later Account:</b> Optional retirement investment account. (Similar to an employer’s retirement plan but is an IRA.)
            </p>
            <img src={laterImg} />
        </li>
        <li>
            <p>
                <b>Early Account:</b> Optional trust fund investment account for children. This is NOT the same as a 529 College Savings account, and on its own CAN disqualify a child from being eligible for Financial Aid, but allows you to use the funds on anything that might benefit the child.
            </p>
            <img src={earlyImg} />
        </li>
    </ul>
)

export default ContentAcorns;
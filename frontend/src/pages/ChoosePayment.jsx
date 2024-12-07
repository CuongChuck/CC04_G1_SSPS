import React from 'react';
import Back from '../components/Back';
import momo from '../assets/momo.png';
import bkpay from '../assets/HCMUT.svg';
import vnpay from '../assets/vnpay.png';
import './ChoosePayment.css';
import Continue from '../components/Continue';

const ChoosePayment = () => {
    return (
        <div>
            <Back link={'/buy'} />
            <div className="container">
                <h3>CHOOSE A PAYMENT METHOD</h3>
                <div className="box-container">
                    <a className="box" href='https://www.momo.vn/' target='_blank'>
                        <img alt='Momo' src={momo} />
                    </a>
                    <a className="box" href='https://bkpay.hcmut.edu.vn/bkpay/home.action'
                    target='_blank'>
                        <img alt='BKPay' src={bkpay} />
                    </a>
                    <a className="box" href='https://vnpay.vn/' target='_blank'>
                        <img alt='VNPAY' src={vnpay} />
                    </a>
                </div>
                <Continue link={'/payment'} />
            </div>
        </div>
    )
}

export default ChoosePayment
import React, { useState } from 'react';
import './SelectNumPage.css';
import Continue from '../components/Continue';

const SelectNumPage = () => {
    const [page, setPage] = useState(0);

    return (
        <div>
            <div className="container">
                <h3>HOW MANY PAGES DO YOU WANT TO BUY?</h3>
                <p className='choose'>Choose the number of Pages</p>
                <form>
                    <input type="number" min={1} max={30} value={page}
                    onChange={(e) => setPage(e.target.value)} />
                </form>
                <p className='result'>You will pay</p>
                <div className="result-box">
                    <span>{page * 400}</span>
                    <span>VND</span>
                </div>
                <Continue link={'/payment-method'} />
            </div>
        </div>
    )
}   

export default SelectNumPage
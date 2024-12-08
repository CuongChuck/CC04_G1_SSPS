import React, { useState } from 'react';
import './SelectNumPage.css';
import Continue from '../components/Continue';

const SelectNumPage = () => {
    const [page, setPage] = useState(0);

    return (
        <div>
            <div className="container">
                <h3>BẠN CẦN MUA BAO NHIÊU TỜ GIẤY?</h3>
                <p className='choose'>Chọn số tờ</p>
                <form>
                    <input type="number" min={1} max={30} value={page}
                    onChange={(e) => setPage(e.target.value)} />
                </form>
                <p className='result'>Bạn phải trả</p>
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
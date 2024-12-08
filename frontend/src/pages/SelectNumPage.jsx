import React, { useEffect, useState } from 'react';
import './SelectNumPage.css';
import Continue from '../components/Continue';

const SelectNumPage = () => {
    const [A4page, setA4Page] = useState(0);
    const [A3page, setA3Page] = useState(0);
    const [A2page, setA2Page] = useState(0);
    
    useEffect(() => {
        if (A4page > 40 || A3page > 20 || A2page > 10) {
            alert("You reach maximum number of pages");
        }
    }, [])

    return (
        <div>
            <div className="container">
                <h3 className='numpage'>BẠN CẦN MUA BAO NHIÊU TỜ GIẤY?</h3>
                <div className='papers'>
                    <div className='paper'>
                        <h3>A4</h3>
                        <p className='choose'>Chọn số tờ</p>
                        <form>
                            <input type="number" min={1} max={40} value={A4page}
                            onChange={(e) => setA4Page(e.target.value)} />
                        </form>
                        <p className='result'>Bạn phải trả</p>
                        <div className="result-box">
                            <span>{A4page * 400}</span>
                            <span>VND</span>
                        </div>
                    </div>
                    <div className='paper'>
                        <h3>A3</h3>
                        <p className='choose'>Chọn số tờ</p>
                        <form>
                            <input type="number" min={1} max={20} value={A3page}
                            onChange={(e) => setA3Page(e.target.value)} />
                        </form>
                        <p className='result'>Bạn phải trả</p>
                        <div className="result-box">
                            <span>{A3page * 800}</span>
                            <span>VND</span>
                        </div>
                    </div>
                    <div className='paper'>
                        <h3>A2</h3>
                        <p className='choose'>Chọn số tờ</p>
                        <form>
                            <input type="number" min={1} max={10} value={A2page}
                            onChange={(e) => setA2Page(e.target.value)} />
                        </form>
                        <p className='result'>Bạn phải trả</p>
                        <div className="result-box">
                            <span>{A2page * 1600}</span>
                            <span>VND</span>
                        </div>
                    </div>
                </div>
                <div className='sum'>
                    <p className='result' style={{marginRight:'50px'}}>Tổng cộng bạn phải trả</p>
                    <div className="result-box">
                        <span>{A2page * 1600 + A3page * 800 + A4page * 400}</span>
                        <span>VND</span>
                    </div>
                </div>
                <Continue link={'/payment-method'} />
            </div>
        </div>
    )
}   

export default SelectNumPage
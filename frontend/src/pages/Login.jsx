import React from 'react';
import Back from '../components/Back';
import Continue from '../components/Continue';
import bk from '../assets/HCMUT.svg';
import './Login.css';

const Login = () => {
    return (
        <div>
            <Back link={'/'} />
            <div className="container">
                <div>
                    <h3 className='login'>Đăng nhập</h3>
                    <img alt='HCMUT' src={bk} className='bklogin' />
                    <form style={{marginBottom:'40px', marginTop:'40px'}}>
                        <p className='choose'>Tên đăng nhập</p>
                        <input type="text" />
                        <p className='choose'>Mật khẩu</p>
                        <input type="password" />
                    </form>
                    <Continue link={'/'} />
                </div>
            </div>
        </div>
    )
}

export default Login
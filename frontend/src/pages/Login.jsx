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
                    <h3>Đăng nhập</h3>
                    <img alt='HCMUT' src={bk} class="center" />
                    <form style={{marginBottom:'40px', marginTop:'40px'}}>
                        <p>Tên đăng nhập</p>
                        <input type="text" />
                        <p>Mật khẩu</p>
                        <input type="password" />
                    </form>
                    <Continue link={'/'} />
                </div>
            </div>
        </div>
    )
}

export default Login
import React from 'react';
import './Admin.css';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="block" onClick={() => {navigate('/history-admin')}>
                Quản lý lịch sử giao dịch
            </div>
            <div className="block">Quản lý giấy</div>
        </div>
    )
}

export default Admin
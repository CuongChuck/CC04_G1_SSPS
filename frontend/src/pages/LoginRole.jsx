import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginRole.css'

const LoginRole = () => {
    const navigate = useNavigate();
    return (
        <div className='buttons'>
            <button className='role' onClick={() => {navigate('/login')}}>User</button>
            <button className='role' onClick={() => {navigate('/login/admin')}}>Admin</button>
        </div>
    )
}

export default LoginRole
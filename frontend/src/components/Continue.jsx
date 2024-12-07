import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Continue.css';

const Continue = ({link}) => {
    const navigate = useNavigate();
    return (
        <button className='continue' onClick={() => {navigate(link)}}>Continue</button>
    )
}

export default Continue
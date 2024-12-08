import React from 'react';
import './NavBar.css';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div className='NavBarContainer'>
            <IconButton
                size='small'
                color='black'
                style={{
                    backgroundColor:'#D9D9D9',
                    height:'30px',
                    borderRadius:'3px',
                    margin:'15px 15px'
                }}
            >
                <MenuIcon />
            </IconButton>
            <a className="NavLink" href='/'>DANH MỤC</a>
            <a className="NavLink" href='#'>IN</a>
            <a className="NavLink" href='/buy'>MUA GIẤY</a>
            <div className='IconContainer'>
                <NotificationsIcon fontSize='large' style={{display:'flex', color:'#CED4DA'}} />
                <ChatRoundedIcon fontSize='large' style={{color:'#CED4DA'}} />
                <AccountCircleIcon
                    fontSize='large'
                    style={{color:'#CED4DA'}}
                    onClick={() => {navigate('/login')}}
                />
            </div>
        </div>
    )
}

export default NavBar
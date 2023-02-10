import React from 'react';
import Logo from '../Header/logo2.jpg';

const Leftnavbaricon = () =>{
    return(
        <div className='left-navbar-icon'>
            <div className='icon'>
                <img src={Logo} alt='logo' />
                <span><b>Park Jimin</b></span>
            </div>
        </div>
    )}

export default Leftnavbaricon
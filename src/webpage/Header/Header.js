import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faAngleRight,faBars} from '@fortawesome/free-solid-svg-icons'
import './header.scss'

const Header = (props) => {
    function HandleClick(){
        props.setShow(!props.show)
    }

    return(
    <div className='header'>
        <div className='arrow-icon'>
            <div>
                <FontAwesomeIcon icon={faArrowLeft} className='iconSize'></FontAwesomeIcon>
            </div> 
            <div className='dashboard'>
                <span>Dashboard</span>
                <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                <span><b>Social Feed</b></span>
            </div>
        </div>
        <div className='bar-icon'>
            <button onClick={HandleClick}><FontAwesomeIcon icon={faBars} className='iconSize'></FontAwesomeIcon></button>
        </div>
    </div>
)}

export default Header
// clicked?console.log('clicked'):console.log('not clicked')
//     if(clicked){
    //         props.setShow(true);
    //         setClicked(false);
    //     }
    //     else{
        //         props.setShow(false);
        //         setClicked(true);
        //     }
        // console.log('false')
            // useEffect(() => {
    //     if(clicked === 2){
    //         setClicked(0)
    //     }
    //     //  eslint-disable-next-line
    // },[clicked])
    // },[])
    // const [clicked,setClicked] = useState(0);
        // setClicked(clicked+1)
// import React, { useState, useEffect } from 'react';

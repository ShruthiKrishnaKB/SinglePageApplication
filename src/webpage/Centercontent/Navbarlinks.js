import React from "react";
import logo from '../Header/logo2.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

// import Maincontent from './webpage/Maincontent';


const Navbarlinks=(props)=>{
    function handleClick(){
        props.setShow(false)
    }
    return(
            <div className="navbar-links" onClick={handleClick}>
                <div className="static-card card">
                    <div className="static-card-user">
                    <div className='static-card-userimage'>
                        <img src={logo} alt='logo' />
                        <div className="static-card-username"><span><b>Park Jimin</b></span><span>Entertainer</span></div>
                    </div>
                    <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                    <div className="static-card-usercontent">Hello World</div>  
                </div>
            </div>          
    )
}

export default Navbarlinks
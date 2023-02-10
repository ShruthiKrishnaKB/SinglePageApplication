import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const NavbarContent = (props) =>{
    const value=props.item
    return(
            <NavLink to={value.url} key={value.index}><div className='nav-list'><span className="font-awesome-icon"><FontAwesomeIcon icon={value.fontIcon} ></FontAwesomeIcon></span><span className="align-text">{value.title}</span><span className="align-num">{value.count}</span></div></NavLink>
    )
}

export default NavbarContent
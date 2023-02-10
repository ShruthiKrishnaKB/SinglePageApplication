import React from "react";
import Moment from 'react-moment'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEllipsis } from "@fortawesome/free-solid-svg-icons";


const Maincontentcard = (props)=>{
    const items=props.items
    const deleteContent=props.deleteContent
    return(
        <div className="static-card card">
            <div className="static-card-user">
                <div className='static-card-userimage'>
                    <img src={items.icon} alt='logo' />
                    <div className="static-card-username"><span><b>{items.name}</b></span><span>{items.role}</span><span><Moment fromNow>{items.time}</Moment></span></div>
                </div>
                <FontAwesomeIcon icon={faEllipsis} onClick={()=>{deleteContent(items.id)}}/>
            </div>
            {items.input!=='' && <div className="static-card-usercontent">{items.input}</div>}
            {items.img!=='' && <img src={items.img} alt='' className='input-img'></img> }   
        </div>
    )
}
export default Maincontentcard
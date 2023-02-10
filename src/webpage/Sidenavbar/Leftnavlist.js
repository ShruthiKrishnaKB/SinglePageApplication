import React,{useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown,faAngleUp} from '@fortawesome/free-solid-svg-icons'
import NavbarContent from './NavbarContent'

const Leftnavlist = (props)=>{
    const first=props.first
    const limit=props.limit
    const[display, setDisplay]=useState(true);


    return(
        <div>
                    {(display ? first.slice(0,limit) : first).map((item)=>
                    {
                        return(
                            <NavbarContent item={item} />
                        )
                    })}
            <button type="button" className="primary-button" onClick={()=>setDisplay(!display)}><b>{display?'See more':'See less'}</b><FontAwesomeIcon icon={display?faAngleDown:faAngleUp} className='down-arrow'/></button>
        </div>
    )
}

export default Leftnavlist
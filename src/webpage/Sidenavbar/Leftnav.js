import React from "react";
import Leftnavlist from "./Leftnavlist";
import { FirstSectionFull,SecondSectionFull } from "./Sidesection";

const Leftnav=()=>{
    return(
        <div>
            <Leftnavlist first={FirstSectionFull} limit={7}/>
            <span className="left-align"><b>Recently added:</b></span>
            <Leftnavlist first={SecondSectionFull} limit={3}/>
        </div>
    )
}

export default Leftnav
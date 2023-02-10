import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoCamera,faCamera, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import logo from '../Header/logo2.jpg'
import { Imgattach } from "./Imgattach";


const Maincontentinput=(props)=>{
    const isChange=props.isChange
    const typeHere=props.typeHere
    const setTypeHere=props.setTypeHere
    const setImage = props.setImage

    return(
            <div className="card">
                <form className="card-tile" onSubmit={isChange}>
                    <img src={logo} alt='logo' className="card-tile-icon"/>
                    <div className="card-tile-content">
                        <div className="card-tile-post">
                        <input type="text" value={typeHere} onChange={(e)=>{setTypeHere(e.target.value)}} placeholder="Share something here...."/>
                        
                        </div>
                        <div className="attachment-line">
                            <div><label htmlFor="imgfile"><FontAwesomeIcon icon={faVideoCamera}></FontAwesomeIcon><span>Any Attachment</span></label></div>
                            <div><FontAwesomeIcon icon={faCamera}></FontAwesomeIcon><span>Capture it</span></div>
                            <div><FontAwesomeIcon icon={faMicrophone}></FontAwesomeIcon><span>Say it</span></div>
                        </div>
                        <Imgattach setImage={setImage} isChange={isChange}/> 
                    </div>
                </form>
            </div>
    )
}
export default Maincontentinput 
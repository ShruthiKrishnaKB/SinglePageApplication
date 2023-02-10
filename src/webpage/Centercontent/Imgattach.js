import { useState } from "react";
import React from "react";
let imgtxt;

export const Imgattach=(props)=>{
    const setImage=props.setImage
    const isChange=props.isChange
    const isCancel =()=>{
        setImage('')
    }

    const [showbutton,setShowButton]=useState(false)
    const handleClickFile = async (event) =>{
        const imgupld=event.target.files[0];
        imgtxt = await encodeImg(imgupld)
        setImage(imgtxt);
        setShowButton(!showbutton);
    }
    const encodeImg = (imgupld)=>{
        return new Promise ((resolve,reject) =>{
            const read=new FileReader();
            read.readAsDataURL(imgupld);
            read.onload = () => resolve(read.result);
            read.onerror = (error) => reject(error);
        })
    }
    return(
        <div className="hidden-attach-file">
        <input type='file' id='imgfile' onChange={handleClickFile} hidden />
        {imgtxt&&<img src={imgtxt} className="preview-img" />}
        <div className="preview-button">
            <button onClick={isChange} className={showbutton?'show-btn':'no-btn'}>Post</button>
            <button onClick={isCancel} className={showbutton?'show-btn':'no-btn'}>Cancel</button>
        </div>
        </div>
    )
}
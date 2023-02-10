import React,{useEffect, useState} from "react";
import './maincontent.scss'
import logo from '../Header/logo2.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoCamera,faCamera, faMicrophone,faEllipsis } from "@fortawesome/free-solid-svg-icons";
import StaticContent from "./StaticContent";
import moment from 'moment-timezone';
import Moment from 'react-moment'; 
import {v4 as uuid} from 'uuid';
import { Imgattach } from "./Imgattach";

const Maincontent = (props)=>{
    function handleClick(){
        props.setShow(false)
    }
    const isPrevDataPresent=()=>{
        const isData = window.localStorage.getItem('postCard')
        if(isData){
            return JSON.parse(isData);
        }
        else{
            return [];
        }
    }
    let inData;
    const[postCard,setPostCard]=useState(isPrevDataPresent());
    const[typeHere,setTypeHere]=useState('');
    const[getData,setGetData]=useState([]);   
    const[image,setImage]=useState('');
    const isChange=(e)=>{
        // e.preventDefault();
        if(typeHere.trim()==="" && image.trim()==="")
        {
            return;
        }
        inData={
            input:typeHere,
            time:moment().format(),
            id:uuid(),
            img:image,
        }
        setPostCard([inData,...postCard]);
        setTypeHere('');
        setImage('');
    }
    function deleteContent(delId){
        const afterDelete=postCard.filter((delItem)=>{
            return delItem.id !== delId
        })
        setPostCard(afterDelete)
        alert("Do you want to delete")
    }
    useEffect(()=>{
        window.localStorage.setItem('postCard',JSON.stringify(postCard));
        setGetData(JSON.parse(window.localStorage.getItem('postCard')))
    },[postCard])
    return(
        <div className="main" onClick={handleClick}>
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
            {getData.map((items,index) => {
                    return(
                        <div className="static-card card" key={index}>
                            <div className="static-card-user">
                                <div className='static-card-userimage'>
                                    <img src={logo} alt='logo' />
                                    <div className="static-card-username"><span><b>Park Jimin</b></span><span>Entertainer</span><span><Moment fromNow>{items.time}</Moment></span></div>
                                </div>
                                <FontAwesomeIcon icon={faEllipsis} onClick={deleteContent(items.id)}/>
                            </div>
                            {items.input!=='' && <div className="static-card-usercontent">{items.input}</div>}
                            {items.img!=='' && <img src={items.img} alt='' className='input-img'></img> }    
                        </div>
                    )
                })}
            {StaticContent.map((item,index)=>{
                return(
                        <div className="static-card card" key={index}>
                            <div className="static-card-user">
                                <div className='static-card-userimage' >
                                    <img src={item.icon} alt='icon' />
                                    <div className="static-card-username"><span><b>{item.name}</b></span><span>{item.role}</span><span>{item.id}</span></div>
                                </div>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </div>
                            <div className="static-card-usercontent">{item.content}</div>
                            
                        </div>
                )})}                
        </div>
    )
}

export default Maincontent

// const [feed,]
    // const[count,setCount]=useState(0);
    // const[vari, setVari]=useState(0)
    // const[isEnter,setIsEnter]=useState(false)
    // setCount(prevCount=>prevCount+1)
    // window.localStorage(setCount(count+1),typeHere);

        // setVari('key'+count)
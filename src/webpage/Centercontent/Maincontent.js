import React,{useEffect, useState} from "react";
import Maincontentinput from "./Maincontentinput";
import Maincontentcard from "./Maincontentcard";
import StaticContent from "./StaticContent";
import logo from '../Header/logo2.jpg'
import moment from 'moment-timezone';
import {v4 as uuid} from 'uuid';
import './maincontent.scss'




const Maincontent=({setShow})=>{
    function handleClick(){
        setShow(false)
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
    const[file,setFile]=useState('');
    const isChange=()=>{
        if(typeHere.trim()==="" && image.trim()===""){
            return;
        }
        inData={
            name:'Park Jimin',
            role:'Entertainer',
            input:typeHere,
            icon:logo,
            time:moment().format(),
            id:uuid(),
            img:image,
            files:file,
        }
        setPostCard([inData,...postCard]);
        setTypeHere('');
        setImage('');
    }
    const deleteContent=(delId)=>{
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
            <Maincontentinput isChange={isChange} typeHere={typeHere} setTypeHere={setTypeHere} setImage={setImage} setFile={setFile} />
            {getData.map((items) => {
                return(
                <Maincontentcard items={items} deleteContent={deleteContent}/>
            )})}
            {StaticContent.map((items) => {
            return(
            <Maincontentcard items={items} deleteContent={deleteContent}/>
            )})}
        </div>
    )
}

export default Maincontent
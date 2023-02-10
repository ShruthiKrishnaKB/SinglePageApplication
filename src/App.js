// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import Header from './webpage/Header/Header';
import {Leftnavbar} from './webpage/Sidenavbar/Leftnavbar';
import Maincontent from './webpage/Centercontent/Maincontent';
import Navbarlinks from "./webpage/Centercontent/Navbarlinks";
import './webpage/mediascreen.scss';
import { Route, Routes } from 'react-router-dom';
import { Sidesection } from './webpage/Sidenavbar/Sidesection';

function App() {
  const [show,setShow]=useState(false)

  return (
    <div className="App">
      
      <Header setShow={setShow} show={show} />
      <Leftnavbar show={show}/>
      <Routes>
        <Route path='/' element={<Maincontent setShow={setShow} show={show} />} />
        {Sidesection.map((item)=>{
          return(<Route path={item.url} element={<Navbarlinks  />} />)
        })}
      </Routes>
    </div>
  );
}

export default App;

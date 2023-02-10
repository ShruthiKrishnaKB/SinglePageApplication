import React from 'react';
import './leftnavbar.scss';
// import { FirstSectionFull,SecondSectionFull } from './Sidesection';
import Leftnavbaricon from './Leftnavbaricon';
import Leftnav from './Leftnav';



export function Leftnavbar(props) {
    return (
            <div className={props.show?'no-display':'left-navbar'}>
                <Leftnavbaricon />
                <Leftnav/>
            </div>
    );
}



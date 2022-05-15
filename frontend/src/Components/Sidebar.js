import React from 'react';
import { SidebarData } from './SidebarData'
import "../App.css";
import {
    Link
  } from "react-router-dom";

function Sidebar() {
    return (
        <div className='Sidebar'>
            <ul className='SidebarList'>
                {SidebarData.map((val, key) => {
                    return (
                        <li
                            className='row'
                            key={key}
                            /* onClick={() => {
                                window.location.pathname = val.path
                            }} */
                        >
                            <Link to={val.path}><div>{val.title}</div></Link>
                            
                        </li>
                    ) 
                })}
            </ul>
        </div>
    );
}

export default Sidebar;
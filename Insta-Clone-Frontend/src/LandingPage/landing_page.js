import React from 'react';
import landing from "./ass_13.png"
import '../App.css'
import { Link } from "react-router-dom";
export default function Landing_page() {
  
  return (
    <div id='enter'>
    <img src={landing}></img>
       <div id='goto' >
          <h1>10XTeam 04</h1>
          <button  ><Link to="/InstaClone">Enter</Link></button>
        </div>
    </div>
  )
}
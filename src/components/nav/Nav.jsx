import React from 'react'
import "./nav.css"
import {MdOutlineWorkOutline} from "react-icons/md"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {BiMessageSquareDetail} from "react-icons/bi"
import {useState} from "react"
import{GrStackOverflow} from "react-icons/gr"



const Nav = () => {
  const [activeNav,setActiveNav] = useState("#")
  return (
    <nav>
    <div>
      <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""} ><AiOutlineUser/></a>
      <h5>About</h5>
    </div>
    <div>
      <a href="#skills" onClick={()=> setActiveNav("#skills")} className={activeNav === "#skills" ? "active" : ""}><GrStackOverflow/></a>
      <h5>Skills</h5>
    </div>
    <div>
      <a href="#experience" onClick={()=> setActiveNav("#experience")} className={activeNav === '#experience' ? 'active' : ''}><MdOutlineWorkOutline/></a>
      <h5>Exp</h5>
    </div>
    <div>
      <a href="#portfolio" onClick={()=> setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><BiBook/></a>
      <h5>Projects</h5>
    </div>
    <div>
      <a href="#contact" onClick={()=> setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageSquareDetail/></a>
      <h5>Contact</h5>
    </div>


    </nav>
  )
}
 
export default Nav 
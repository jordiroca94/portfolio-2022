import React from 'react'
import "./footer.css"
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#portfolio">Home</a></li>
        <li><a href="#contact">Home</a></li>

      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/jordi-roca-soler/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/jordiroca94" target="_blank"><FaGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>Copyright &copy; Jordi Roca</small>
      </div>
    </footer>
  )
}

export default Footer
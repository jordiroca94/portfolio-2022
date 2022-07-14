import React from 'react'
import "./footer.css"
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/jordi-roca-soler/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/jordiroca94" target="_blank"><FaGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>Copyright &copy; 2022 Jordi Roca</small>
      </div>
    </footer>
  )
}

export default Footer
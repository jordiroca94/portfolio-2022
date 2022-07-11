import React from 'react'
import "./about.css"
import {FaAward} from "react-icons/fa"
import {FaHotel} from "react-icons/fa"
import {BsCodeSlash} from "react-icons/bs"

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>+1 Year Working</small>
            </article>
            <article className="about__card">
              <FaHotel className="about__icon"/>
              <h5>Background</h5>
              <small>Hosplitality & Technology</small>
            </article>
            <article className="about__card">
              <BsCodeSlash className="about__icon"/>
              <h5>Projects</h5>
              <small>4 Projects Completed</small>
            </article>
          </div>
          <p> Hello I'm Jordi</p>
          <div className='about-button'>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
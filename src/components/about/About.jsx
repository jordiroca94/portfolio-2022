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
              <small>3 Projects Completed</small>
            </article>
          </div>
          <p className='about__content'>I'm a junior web developer with one year of experience coding.<br/><br/>
          With background in Hotel Management I'have been many years working in diferent countries such as United States, Spain and Greece following one of my many passions: Work in huge multicultural teams with people from all over the world.<br/><br/>
          After finishing my bachelor degree studies in Nanyang Technological University in Singapore I'had the chance to start getting interested in web development becoming one more of my passion.<br/><br/>
          Few years later I'started coding more professionaly until I decided to make it fully professional and joined a Fullstack web development Bootcamp at Ironhack Barcelona.<br/><br/>
          After this bootcamp I had the chance to start working in a Swedish startup as a Front-end developer named ClowID.<br/>
          </p>
          <div className='about-button'>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
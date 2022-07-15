import React from 'react'
import "./experience.css"
import IMG1 from "../../assets/experience1.png"
import IMG2 from "../../assets/experience2.png"

 

const Experience = () => {
  return (
    <section id='experience'>
         <h5>My Recent Work</h5>
         <h2>My Experience</h2>
          <article className='exp__item'>
            <img src={IMG1} alt="Ironhack" className='exp__image'/>
            <div>
              <h2>IRONHACK BARCELONA - Oct to Dec 2021</h2>
              <p>Intensive Bootcamp of 3 months based in agile methodology creating real projects <br/>Front-end: HTML5 | CSS3 | JavaScript (ES6) | React <br/>
                Back-end: NodeJS | ExpressJS | MongoDB | Axios<br/>
                Version Control: Git | Github</p>
            </div>
          </article>
          <br/>
          <article className='exp__item'>
            <img src={IMG2} alt="ClowID" className='exp__image'/>
            <div>
              <h2>CLOWID - March to June 2022</h2>
              <p>Front End development of ClowID web app (fintech swedish startup) using Agile methodology.<br/>Front-end: HTML5 | SCSS | Tailwind | JavaScript (ES6) | TypeScript | Angular 12.<br/>
              Version Control: Git | GitLab</p>
            </div>
          </article>
    </section>
    
  )
}

export default Experience
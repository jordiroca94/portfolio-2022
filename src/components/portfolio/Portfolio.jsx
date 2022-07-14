import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.png"
import IMG3 from "../../assets/portfolio3.png"

const data = [
  {
    id:1,
    image: IMG1,
    title:"Pirates of the Caribbean",
    description:"Canvas Game where you are a pirate and you have to shoot sharks, avoid obstacles and help your mates to increase your score.",
    stack:"Javascript, Html and CSS.",
    github: "https://github.com/jordiroca94/Pirates-Of-The-Caribbean",
    demo: "https://jordiroca94.github.io/Pirates-Of-The-Caribbean",
  },
  {
    id:2,
    image: IMG2,
    title:"Duga App",
    description:"Web app that allows you to create a playlist of songs based on a searched artist.",
    stack:"Javascript, Express, Handlebars, HTML, CSS, Node.JS, MongoDB and Spotify API.",
    github: "https://github.com/project-duga/duga-app",
    demo: "https://duga-app.herokuapp.com",
  },
  {
    id:3,
    image: IMG3,
    title:"Netflix Clone",
    description:"Netflix React application using authentification and fuse.js to play and filter series and movies.",
    stack:"React, Javascript, Firebase & Styled Components.",
    github: "https://github.com/jordiroca94/Netflix",
    demo: "https://netflix-clone-2022.herokuapp.com",
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        data.map(({id,image,description,stack,title,github,demo})=>{
          return(
            <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title}></img>
          </div>
            <h3>{title} </h3>
            <p>{description}</p>
            <br />
            <p>Core Stack : {stack}</p>
            <br />
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target="_blank">Github</a>
            <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
        </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio
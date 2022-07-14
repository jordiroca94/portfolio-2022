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
    github: "https://github.com/jordiroca94/Pirates-Of-The-Caribbean",
    demo: "https://github.com/jordiroca94/Pirates-Of-The-Caribbean",
  },
  {
    id:2,
    image: IMG2,
    title:"Duga App",
    github: "https://github.com/project-duga/duga-app",
    demo: "https://duga-app.herokuapp.com/users/login",
  },
  {
    id:3,
    image: IMG3,
    title:"Netflix Clone React",
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
        data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title}></img>
          </div>
            <h3>{title} </h3>
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
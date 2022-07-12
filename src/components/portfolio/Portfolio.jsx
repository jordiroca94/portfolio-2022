import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.png"



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""></img>
          </div>
            <h3>Pirates of the Caribbean </h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/jordiroca94/Pirates-Of-The-Caribbean" className='btn' target="_blank">Github</a>
            <a href="" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt=""></img>
          </div>
            <h3>Duga App </h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/project-duga/duga-app" className='btn' target="_blank">Github</a>
            <a href="https://duga-app.herokuapp.com/users/login" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""></img>
          </div>
            <h3>Netflix Clone React </h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/jordiroca94/Netflix" className='btn' target="_blank">Github</a>
            <a href="https://netflix-clone-2022.herokuapp.com/" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
        </article>
  
      </div>
    </section>
  )
}

export default Portfolio
import React from 'react'
import "./portfolio.css"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__contai">
        <article className='portfolio__item'>
          <div className="portfolio__item_">
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/jordiroca94/Netflix" className='btn'>Github</a>
            <a href="https://netflix-clone-2022.herokuapp.com/" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
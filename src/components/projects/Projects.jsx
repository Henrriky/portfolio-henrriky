import React from 'react'
import Work1 from '../../assets/work1.jpg'
import './projects.css'

function Projects() {
  return (
    <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Projetos</h2>
        <span className="section__subtitle">Meus projetos recentes</span>

        <div className="portfolio__container container grid">
                <div className="portfolio__content">
                    <div className="portfolio__data">
                        <img src={Work1} alt="" className="portfolio__img"/>
                        <h3 className="portfolio__title">Website Moderno</h3>
                        <span href="" className="portfolio__button">
                            Acessar código
                            <i className="uil uil-arrow-right portfolio__button__icon"></i>
                        </span>
                    </div>
                </div>
                <div className="portfolio__content">
                    <div className="portfolio__data">
                        <img src={Work1} alt="" className="portfolio__img"/>
                        <h3 className="portfolio__title">Website Moderno</h3>
                        <span href="" className="portfolio__button">
                            Acessar código
                            <i className="uil uil-arrow-right portfolio__button__icon"></i>
                        </span>
                    </div>
                </div>
                <div className="portfolio__content">
                    <div className="portfolio__data">
                        <img src={Work1} alt="" className="portfolio__img"/>
                        <h3 className="portfolio__title">Website Moderno</h3>
                        <span href="" className="portfolio__button">
                            Acessar código
                            <i className="uil uil-arrow-right portfolio__button__icon"></i>
                        </span>
                    </div>
                </div>
                <div className="portfolio__content">
                    <div className="portfolio__data">
                        <img src={Work1} alt="" className="portfolio__img"/>
                        <h3 className="portfolio__title">Website Moderno</h3>
                        <span href="" className="portfolio__button">
                            Acessar código
                            <i className="uil uil-arrow-right portfolio__button__icon"></i>
                        </span>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default Projects
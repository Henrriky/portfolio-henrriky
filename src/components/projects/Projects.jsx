import React from 'react'
import { DataProjects } from './DataProjects'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import './projects.css'


function Projects() {

    return (
        <section className="portfolio container section" id="portfolio">
            <h2 className="section__title">Projetos</h2>
            <span className="section__subtitle">Meus projetos recentes</span>

            <Swiper
                // className="portfolio__container container grid"
                className="portfolio__container grid"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}
            >
                {DataProjects.map(projectPair => {
                    return (
                        
                        <SwiperSlide className="portfolio__content" key={projectPair[0].id}>
                            <div className="portfolio__data__card">
                                <img src={projectPair[0].image} alt="" className="portfolio__img" />
                                <div className="portfolio__data__card__text">
                                    <h3 className="portfolio__title">{projectPair[0].title}</h3>
                                    {/* eslint-disable */}
                                    <a href={projectPair[0].link} className="portfolio__button" target="_blank">
                                        Acessar código
                                        <i className="uil uil-arrow-right portfolio__button__icon"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="portfolio__data__card" key={projectPair[1].id}>
                                <img src={projectPair[1].image} alt="" className="portfolio__img" target="_blank" />
                                <div className="portfolio__data__card__text">
                                    <h3 className="portfolio__title">{projectPair[1].title}</h3>
                                    <a href={projectPair[1].link} className="portfolio__button">
                                        Acessar código
                                        <i className="uil uil-arrow-right portfolio__button__icon"></i>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    )

                })}
            </Swiper>
        </section>
    )
}

export default Projects
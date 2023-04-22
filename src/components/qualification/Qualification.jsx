import React, { useState } from 'react'
import './qualification.css';

function Qualification() {
  
  const [toggleQualification, setToggleQualification] = useState(1);

  const toggleTab = (index) => {
      setToggleQualification(index);
  }


  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualificações</h2>
      <span className="section__subtitle">Minha jornada pessoal</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div 
          className={toggleQualification === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
          onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Educação
          </div>

          <div 
          className={toggleQualification === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
          onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experiência
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleQualification === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2015 - 2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - 2022
                </div>
              </div>
            </div>
          </div>

          <div className={toggleQualification === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Product Designer</h3>
                <span className="qualification__subtitle">Microsoft - Spain</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UX Designer</h3>
                <span className="qualification__subtitle">Apple Inc - Brazil</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">Figma - Spain</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2015 - 2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Qualification
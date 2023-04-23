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
                <h3 className="qualification__title">Análise Desenvolvimento de Sistemas</h3>
                <span className="qualification__subtitle">Instituto Federal de São Paulo</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2023 - 2025
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
                <h3 className="qualification__title">Ensino Médio com Habilitação Técnica Desenvolvimento de Sistemas</h3>
                <span className="qualification__subtitle">Etec de Vila Formosa</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - 2022
                </div>
              </div>
            </div>
          </div>

          <div className={toggleQualification === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Em desenvolvimento</h3>
                <span className="qualification__subtitle">Em desenvolvimento</span>
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
                <h3 className="qualification__title">Em desenvolvimento</h3>
                <span className="qualification__subtitle">Em desenvolvimento</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Em desenvolvimento</h3>
                <span className="qualification__subtitle">Em desenvolvimento</span>
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
          </div>

        </div>
      </div>
    </section>
  )
}

export default Qualification
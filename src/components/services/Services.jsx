import React, { useState } from 'react'
import './services.css'

function Services() {

    const [toggleModal, setToggleModal] = useState(0);

    const toggleTab = (index) => {
        setToggleModal(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Serviços</h2>
            <span className="section__subtitle">O que eu faço</span>
            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-brackets-curly services__icon"></i>
                        <h3 className="services__title">
                            Front-end
                        </h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>
                        Veja mais {""}
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleModal === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Front-end</h3>
                            <p className="services__modal-description">
                                Trabalhando de forma independente na área a mais de 2 anos, eu posso oferecer um site de qualidade que vai impulsionar o marketing negócio
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Interfaces otimizadas com React ou HTML, CSS e JS</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Sites responsivos, compatíveis com vários dispositivos</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Sensação de página única com React (SPA)</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Melhores práticas de desenvolvimento, com aplicação do SEO e código limpo</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Animações que aumentam a experiência do usuário e chamam a atenção</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Back-end</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(2)}>
                        Veja mais
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleModal === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Back-end</h3>
                            <p className="services__modal-description">
                            Trabalhando de forma independente na área a mais de 1 ano, eu posso oferecer serviços que vão possibilitar uma integração com 
                            outras plataformas(Web ou Mobile), colocando a lógica de negócio separada do Front-end.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Utilização de Node.js e Express para criação de soluções robustas e escaláveis</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Aplicação de boas práticas, como a Arquitetura de Software</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Criação de API's de alta qualidade</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Implementação de banco de dados eficientes e escaláveis</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desenvolvo sistemas de autenticação e autorização(JWT) para garantir a segurança e a privacidade dos seus usuários</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-mobile-android services__icon"></i>
                        <h3 className="services__title">Mobile <br /> Developer</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(3)}>
                        Veja mais
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleModal === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Mobile Developer</h3>
                            <p className="services__modal-description">Sou um novato no ramo do desenvolvimento Mobile. Porém, estou em busca de aprimorar minhas habilidades nessa área</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Conhecimento em React Native</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Aplicativos que funcionam no IOS e Android</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Sempre buscando otimização e interface intuitiva para o usuário</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
import React from 'react'
import './footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Henrriky</h1>
                <ul className="footer__list">
                    { /* eslint-disable */}
                    <li><a href="#about" className="footer__link">Sobre</a></li>
                    <li><a href="#skills" className="footer__link">Habilidades</a></li>
                    <li><a href="#portfolio" className="footer__link">Projetos</a></li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.instagram.com/henrriky.jh" className="" target="_blank"><i className="uil uil-instagram footer__social-link"></i></a>
                    <a href="https://www.linkedin.com/in/henrriky-jhonny-446baa1b5/" className="" target="_blank"><i className="uil uil-linkedin-alt footer__social-link"></i></a>
                    <a href="https://www.github.com/Henrriky" className="" target="_blank"><i className="uil uil-github-alt footer__social-link"></i></a>
                </div>
                <span className="footer__copy">&#169; Henrriky. Todos os direitos reservados</span>
            </div>
            
        </footer>
    )
}

export default Footer
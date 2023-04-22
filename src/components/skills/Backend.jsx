import React from 'react'

function Backend() {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Desenvolvedor Back-end</h3>
    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i className='bx bxl-java skills__icon'></i>
                <div>
                    <h3 className="skills__name">Java</h3>
                    <span className="skills__level">Intermediário</span>
                </div>
            </div>
            <div className="skills__data">
                <i className='bx bxl-nodejs skills__icon'></i>
                <div>
                    <h3 className="skills__name">Node.js</h3>
                    <span className="skills__level">Intermediário</span>
                </div>
            </div>
            <div className="skills__data">
                <i className='bx bxl-php skills__icon'></i>
                <div>
                    <h3 className="skills__name">PHP</h3>
                    <span className="skills__level">Intermediário</span>
                </div>
            </div>
        </div>
        <div className="skills__group">
            <div className="skills__data">
                <i className='bx bxl-typescript skills__icon'></i>
                <div>
                    <h3 className="skills__name">TypeScript</h3>
                    <span className="skills__level">Básico</span>
                </div>
            </div>
            <div className="skills__data">
                <i className='bx bxs-data skills__icon'></i>
                <div>
                    <h3 className="skills__name">MySQL e MongoDB</h3>
                    <span className="skills__level">Intermediário</span>
                </div>
            </div>
            <div className="skills__data">
                <i className='bx bxl-firebase skills__icon'></i>
                <div>
                    <h3 className="skills__name">Firebase</h3>
                    <span className="skills__level">Básico</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Backend
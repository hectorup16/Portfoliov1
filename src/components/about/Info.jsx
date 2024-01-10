import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class='bx bx-award about__icon'></i>

                <h3 className="about__title">Experencie</h3>
                <span className="about__subtitle">3 Years Working</span>
            </div>
            <div className="about__box">
                <i class='bx bx-briefcase-alt about__icon'></i>

                <h3 className="about__title">Complete</h3>
                <span className="about__subtitle">10 + projects</span>
            </div>
            <div className="about__box">
                <i class='bx bx-support about__icon'></i>

                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>
        </div>
    )
}

export default Info

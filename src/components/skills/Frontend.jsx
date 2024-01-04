import React from 'react';


const frontendItems = [{ name: "HTML", level: "Advanced"}, { name: "CSS", level: "Basic"}, { name: "Javascript", level: "Intermediate"}, { name: "Bootstrap", level: "Intermediate"}, { name: "GIT", level: "Intermediate"}, { name: "React", level: "Intermediate"} ];


const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        {frontendItems.map((item, index) => {
                            return (
                                <div className='skills__item' key={index}>
                                    <i className='bx bx-badge-check'></i>
                                    <div>
                                        <h3 className="skills__name">{item.name}</h3>
                                        <span className="skills__level">{item.level}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend

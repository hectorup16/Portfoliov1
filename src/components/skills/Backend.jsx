import React from 'react';


const backendItems = [{ name: "NodeJS", level: "Intermediate" }, { name: "GraphQL", level: "Basic" }, { name: "MySQL", level: "Basic" }, { name: "Python", level: "Basic" }];

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        {backendItems.map((item, index) => {
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

export default Backend

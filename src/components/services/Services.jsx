import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            Software <br /> Developer
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right 
                    services__button-icon"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times 
                            services__modal-close"></i>

                            <h3 className="services__modal-title">Software Developer</h3>
                            <p className="services__modal-description">Service
                                with more than 2 years of experience.
                                Providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">I
                                        Break down requirements into specific tasks and functionalities.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Write clean and efficient code in the appropriate programming language.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Create and consume APIs for service integration
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Use version control systems (such as Git) to manage source code
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Stay abreast of the latest technologies and development practices.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Ui/Ux <br /> Designer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right 
                    services__button-icon"></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times 
                            services__modal-close"></i>

                            <h3 className="services__modal-title">Ui/Ux Designer</h3>
                            <p className="services__modal-description">Service
                                with more than 1 years of experience.
                                Providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">I
                                        Create graphic elements, icons and other visual components
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Research current design trends.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Analyze the competition and other similar applications.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Establish clear goals and objectives for the design.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Develop basic schemes for the layout and structure of the interface.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Mobile application <br />
                            development</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right 
                    services__button-icon"></i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times 
                            services__modal-close"></i>

                            <h3 className="services__modal-title">Mobile application development</h3>
                            <p className="services__modal-description">Service
                                with more than 1 years of experience.
                                Providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">I
                                        Use frameworks and libraries such as React.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Develop mobile applications for iOS and Android using cross-platform technologies such as React Native
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Integrate external services, such as payment systems, authentication, or third-party APIs.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Identify and resolve bottlenecks to improve application performance.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Stay up to date with the latest technologies and trends in web and mobile development.
                                    </p>
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

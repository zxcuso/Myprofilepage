import React from 'react'
import './About.css';
import Contabout from './Contabout';
import abtimgae from '../../ASSETS/wahh.jpg'

const About = () => {
    return (
        <section id='about'>
            <div className='header__title'>
                <h5>Get To Know</h5>
                <h1>About Me</h1>
            </div>
            <div className="container about__container">
                <div className="about__me about__me2">
                    <div className="about__me-image">
                        <img src={abtimgae} alt="phote abdul" />
                    </div>
                </div>
                <div className="about__details">
                    <Contabout />
                </div>
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={abtimgae} alt="phote abdul" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
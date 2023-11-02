import React from 'react'
import './Experience.css';
import Servicon from './SERV/Servicon';
import Expercontain from './EXPRNC/Expercontain';

const Experience = () => {
    return (
        <section id='experience'>
            <div className="head__title">
                <h1>Experience & Services</h1>


            </div>
            <div className="container experience__container">

                <div className="work__service">
                    <h4>Experience & Qualification</h4>
                    <Servicon />
                </div>

                <div className="work__experience">
                    <h4>Services</h4>
                    <Expercontain />
                </div>




            </div>
        </section>
    )
}

export default Experience
import React from 'react'
import './Servicon.css'
import { GiSkills } from 'react-icons/gi'
import { LiaHandPointRightSolid } from 'react-icons/lia'


const Skill = () => {
    return (
        <section className='experience__section'>
            <h5>Skills & Competence</h5>
            <div className="contain__exp">
                <ul className='ul__content'>
                    <div className='educ__icon'>
                        <GiSkills size={32} className='new__icon' />
                        <h6>  Skills and Competence :</h6>
                    </div>
                </ul>
            </div>

            <div className="contain__exp list_space">
                <ul className='ul__content'>
                    <li className='new__list'>
                        <LiaHandPointRightSolid size={15} className='inner__icon' />
                        <h6>Strong analytical skills and attention to details.</h6>
                    </li>
                </ul>
            </div>

            <div className="contain__exp list_space">
                <ul className='ul__content'>
                    <li className='new__list'>
                        <LiaHandPointRightSolid size={15} className='inner__icon' />
                        <h6>Strong communication skill and critical thinking.</h6>
                    </li>
                </ul>
            </div>


            <div className="contain__exp list_space">
                <ul className='ul__content'>
                    <li className='new__list'>
                        <LiaHandPointRightSolid size={15} className='inner__icon' />
                        <h6>Strong organisational and time management skill.</h6>
                    </li>
                </ul>
            </div>


            <div className="contain__exp list_space">
                <ul className='ul__content'>
                    <li className='new__list'>
                        <LiaHandPointRightSolid size={15} className='inner__icon' />
                        <h6>Strong organisational and time management skill.</h6>
                    </li>
                </ul>
            </div>


            <div className="contain__exp list_space">
                <ul className='ul__content'>
                    <li className='new__list'>
                        <LiaHandPointRightSolid size={15} className='inner__icon' />
                        <h6>Self-driven and resilient; able to thrive in a high-pressure enviroment.</h6>
                    </li>
                </ul>
            </div>


            <div className="contain__exp list_space">
                <ul className='ul__content'>
                    <li className='new__list'>
                        <LiaHandPointRightSolid size={15} className='inner__icon' />
                        <h6>Excellent written and verbal communication skills.</h6>
                    </li>
                </ul>
            </div>

            <div className="contain__exp list_space">
                <ul className='ul__content'>
                    <li className='new__list'>
                        <LiaHandPointRightSolid size={15} className='inner__icon' />
                        <h6>Strong analytical skills and attention to details. </h6>
                    </li>
                </ul>
            </div>

        </section >

    )
}

export default Skill

import React from 'react'
import './Servicon.css'
import { FaUserGraduate } from 'react-icons/fa';
import { MdGrade } from 'react-icons/md';

const Quali = () => {
    return (
        <section className='experience__section'>
            <h5>Professional & Educational Qualification</h5>
            <div className="contain__exp">

                <ul className='ul__content' >
                    <div className='educ__icon'>
                        <FaUserGraduate size={32} className='new__icon' />
                        <h6>  Educational Qualification :</h6>
                    </div>
                    <li className='new__list'>
                        <MdGrade className='inner__icon' />
                        <h6>Bsc in Accounting - Federal University Kashere, 2017.</h6>
                    </li>
                    <li className='new__list'>
                        <MdGrade className='inner__icon' />
                        <h6>West Africa Examination Council (WACE), 2012.</h6>
                    </li>

                </ul>

                <ul className='ul__content' >
                    <div className='educ__icon'>
                        <FaUserGraduate size={32} className='new__icon' />
                        <h6>  Professional Qualification :</h6>
                    </div>
                    <li className='new__list'>
                        <MdGrade className='inner__icon' />
                        <h6>Institute of Chartered Accountants of Nigeria (ICAN), 2020.</h6>
                    </li>
                    <li className='new__list'>
                        <MdGrade size={20} className='inner__icon' />
                        <h6>Higher Diploma in Python Programming Language - Dialogue Academy, 2021</h6>
                    </li>

                </ul>
            </div>

        </section>
    )
}

export default Quali
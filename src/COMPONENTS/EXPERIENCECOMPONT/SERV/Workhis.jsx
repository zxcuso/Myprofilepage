import React from 'react'
import './Servicon.css'
import { BsBank } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { BiSolidTimeFive } from 'react-icons/bi'

const Workhis = () => {
    return (
        <section className='experience__section wok__con'>
            <h5>Work History</h5>
            <div className="contain__exp ">
                <ul className='ul__content'>
                    <li className='li__content'>
                        <div className='mm'><span className='icon__expn'><BsBank /></span >Company</div>
                        <div className='mm2'><span className='span_2'>UF Idiagi & Co (Accounting Firm)</span></div>
                    </li>

                    <li className='li__content'>
                        <div className='mm'><span className='icon__expn'><ImLocation2 /></span>Location</div>
                        <div className='mm2'><span className='span_2'>Kaduna State, Nigeria.</span></div>
                    </li>

                    <li className='li__content'>
                        <div className='mm'><span className='icon__expn'><BsFillBagCheckFill /></span>Job Title</div>
                        <div className='mm2'><span className='span_2'>  Audit Manager</span> </div>
                    </li>

                    <li className='li__content'>
                        <div className='mm'><span className='icon__expn'><BiSolidTimeFive /></span>Time Period</div>
                        <div className='mm2'><span className='span_2'> January 2021 - to Date</span> </div>
                    </li>
                </ul>

                <ul className='ul__content'>
                    <li className='li__content'>
                        <div className='mm'><span className='icon__expn'><BsBank /></span>Company  </div>
                        <div className='mm2'><span className='span_2'>NNDC Musa Bello Learning Center.</span> </div>
                    </li>

                    <li className='li__content'>
                        <div className='mm'><span className='icon__expn'><ImLocation2 /></span>Location</div>
                        <div className='mm2'><span className='span_2'>Kaduna State, Nigeria.</span></div>
                    </li>

                    <li className='li__content'>
                        <div className='mm'><span className='icon__expn'><BsFillBagCheckFill /></span>Job Title</div>
                        <div className='mm2'><span className='span_2'>Assistant Lecturer</span></div>
                    </li>

                    <li className='li__content'>
                        <div className='mm' ><span className='icon__expn'><BiSolidTimeFive /></span>Time Period</div>
                        <div className='mm2'><span className='span_2'>May 2022 - to date</span></div>
                    </li>

                </ul>

                <ul className='ul__content'>
                    <li className='li__content'>
                        <div className='mm'><span className='icon__expn'><BsBank /></span>Company  </div>
                        <div className='mm2'><span className='span_2'>UF Idiagi & Co (Accounting Firm)</span> </div>
                    </li>

                    <li className='li__content'>
                        <div className='mm'><span className='icon__expn'><ImLocation2 /></span>Location</div>
                        <div className='mm2'><span className='span_2'>Kaduna State, Nigeria.</span></div>
                    </li>

                    <li className='li__content'>
                        <div className='mm'><span className='icon__expn'><BsFillBagCheckFill /></span>Job Title</div>
                        <div className='mm2'><span className='span_2'>Graduate Trainnee</span></div>
                    </li>

                    <li className='li__content'>
                        <div className='mm' ><span className='icon__expn'><BiSolidTimeFive /></span>Time Period</div>
                        <div className='mm2'><span className='span_2'>June 2018 - December 2020</span></div>
                    </li>

                </ul>
            </div>
        </section>
    )
}

export default Workhis
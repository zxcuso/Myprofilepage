import React from 'react'
import './Expercontain.css';
import { SiConsul } from 'react-icons/si'

const Consultancy = () => {
    return (
        <section className='experience__section'>
            <h5>Consultancy</h5>
            <div className="contain__exp">
                <div className="audit__container consult__con">
                    <SiConsul size={45} className='consult__icon' />
                    <p>
                        At UF Idiagi & Co (Chartered Accountants), were i practise as auditor, we take pride in delivering a wide range of audit and assurance services.
                    </p>
                </div>
                <div className="audit__container consult__con">
                    <p>
                        At UF Idiagi & Co (Chartered Accountants), were i practise as auditor, we take pride in delivering a wide range of audit and assurance services.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Consultancy
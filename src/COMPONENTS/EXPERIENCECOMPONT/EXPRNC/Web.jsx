import React from 'react'
import './Expercontain.css';
import { FaCodeBranch } from 'react-icons/fa'


const Web = () => {
    return (
        <section className='experience__section'>
            <h5>Web Application Development</h5>
            <div className="contain__exp">
                <div className="audit__container consult__con">
                    <FaCodeBranch size={45} className='consult__icon' />
                    <p>
                        At UF Idiagi & Co (Chartered Accountants), were i practise as auditor, we take pride in delivering a wide range of audit and assurance services.
                    </p>
                </div>

            </div>
        </section>
    )

}

export default Web
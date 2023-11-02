import React from 'react'
import './Expercontain.css';
import { BiSolidCheckShield } from 'react-icons/bi'

const Auditservice = () => {
    return (
        <section className='experience__section'>
            <h5>Audit Service</h5>
            <div className="contain__exp">
                <div className="audit__container consult__con">
                    <BiSolidCheckShield size={45} className='audit__icon' />
                    <p>
                        At UF Idiagi & Co (Chartered Accountants), were i practise as auditor, we take pride in delivering a wide range of audit and assurance services.
                    </p>
                </div>

            </div>

        </section>
    )
}

export default Auditservice
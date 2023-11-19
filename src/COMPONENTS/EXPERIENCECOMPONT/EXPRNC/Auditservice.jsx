import React from 'react'
import './Expercontain.css';
import { BiSolidCheckShield } from 'react-icons/bi'

const Auditservice = () => {
    return (
        <section className='experience__section'>
            <h5>Audit Service</h5>
            <div className="contain__exp">
                <div className="audit__container consult__con">
                    <div className="audit__background__img">
                    <BiSolidCheckShield size={45} className='audit__icon' />
                    </div>
                </div>

                <div className="audit__container consult__con">
                    <p>
                      At UF Idiagi & Co (Chartered Accountants), were i practise as auditor, we take pride in delivering a wide range of audit and assurance services that includes:
                    </p>
                </div>

                <div className="audit__container consult__con">
                    <h3>FINANCIAL STATEMENT AUDIT:</h3>
                    <p>
                        Examining and verifying a company's financial statements to ensure accurancy and compiance with accounting standards and local regulations.
                    </p>
                </div>
                              
                <div className="audit__container consult__con">
                    <h3>INTERNAL AUDIT:</h3>
                    <p>
                        Independent evaluation of an organization's internal controls and process for risk management and efficiency.
                    </p>
                </div>
                <div className="audit__container consult__con">
                    <h3>FORENSIC AUDIT:</h3>
                    <p>
                        Investigating financial discrepancies or fraud within an organization.
                    </p>
                </div>
                <div className="audit__container consult__con">
                    <h3>OPERATIONAL AUDIT:</h3>
                    <p>
                        Reviewing the efficiency and effectiveness of an organization's operations and processes.
                    </p>
                </div>
                <div className="audit__container consult__con">
                    <h3>INFORMATION SYSTEMS AUDIT:</h3>
                    <p>
                        Assessing the security and integrity of an organization's information systems and data.
                    </p>
                </div>

            </div>

        </section>
    )
}

export default Auditservice
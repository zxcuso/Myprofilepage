import React from 'react'
import './Expercontain.css';
import { AiOutlineAppstore } from "react-icons/ai";

const Consultancy = () => {
    return (
        <section className='experience__section'>
            <h5>Consultancy</h5>
            <div className="contain__exp">
            
                <div className="audit__container consult__con">
                <div className="audit__background__imgc">
                    <AiOutlineAppstore  size={45} className='audit__icon' />
                    </div> 
                    {/* <p>
                        At UF Idiagi & Co (Chartered Accountants), were i practise as auditor, we take pride in delivering a wide range of audit and assurance services.
                    </p> */}
                    
                </div>
          
                <div className="audit__container consult__con">
                    <p>
                     I carry out the following consultancy serivices ;
                    </p>
                </div>
                <div className="audit__container consult__con">
                <h3>ACCOUNTANCY SERVICES:</h3>
                    <p>
                        I specialize in providing comprehensive accountancy consultancy services. with a keen eyes for financial details and a deep understanding of accounting principles. From bookkeeping to financial analysis, my expertise ensures accurate strategic financial management. Whether you are a small business aiming for fiscal clarity or a larger enterprise seeking optimization, my accountancy consultancy is tailored to meet your specific needs, fostering financial stability and informed decision-making.
                    </p>
                </div>
                {/* <div className="audit__container consult__con">
                <h3>ACCOUNTANCY SERVICES:</h3>
                    <p>
                        
                    </p>
                </div> */}

            </div>
        </section>
    )
}

export default Consultancy
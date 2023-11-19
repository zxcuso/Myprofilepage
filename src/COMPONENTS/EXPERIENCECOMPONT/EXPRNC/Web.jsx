import React from 'react'
import './Expercontain.css';
import { LuCode2 } from "react-icons/lu";


const Web = () => {
    return (
        <section className='experience__section'>
            <h5>Web Application Development</h5>
            <div className="contain__exp">
                <div className="audit__container consult__con">
                <div className="audit__background__img">
                    <LuCode2 size={45} color='black' className='audit__icon' />
                </div>
                    
                </div>
                {/* <div className="audit__container consult__con">
                <p>
                 At UF Idiagi & Co (Chartered Accountants), were i practise as auditor, we take pride in delivering a wide range of audit and assurance services.
                </p>
                </div> */}

                <div className="audit__container consult__con">
                    <h3>WEB DESIGN & DEVELOPMENT:</h3>
                    <p>
                        As a front-end developer, i specialize in crafting visually appealing and user-friendly websites. with keen eye for design and a passion for creating seamless user experiences. My expertise lies in translating ideas into responsive and interactive interfaces, ensuring that websites not only look impressive but also function flawlessly across devices.
                    </p>
                    
                </div>
                <div className="audit__container consult__con">
                    <p>
                        Whether you are starting a new project or revamping and existing website, i bring creativity and technical proficiency to the table. let's collaborate to bring your vision to life through innovative front-end development and engaging web design.
                    </p>
                </div>

            </div>
        </section>
    )

}

export default Web
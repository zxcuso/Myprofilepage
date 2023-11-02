import React from 'react'
import './About.css';


const data = `A professional accountant with years of progressive experience in audit and accountancy, with great interest in financial
technology. As an auditor, I carry out audits, reviews on internal control systems and accountancy services for
companies. Having good knowledge on front end development, with practical skills in HTML, CSS, JavaScript, React
& Git. Creative, goal driven, able to navigate high-stress situations and achieve set targets under tight schedule.`

const Professional = () => {
    return (
        <div className='pro__container'>
            <h5>Professional Summary</h5>
            <div className="text__container">
                <p>{data}</p>
            </div>

        </div>
    )
}

export default Professional



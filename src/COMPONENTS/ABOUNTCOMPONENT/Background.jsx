import React from 'react'
import './About.css';

const data = `Yunusa Abdulwahab holds a bachelor's degree in accounting from Federal University Kashere, Gombe state. He is an associate member of the institute of chartered accountants of Nigeria (ICAN). 
Till date, he works as Senior auditor with UF Idiagi & Co, a firm of chartered accountants with over six (6) years of field experience. He is also a lecturer at ICAN learning center Kaduna (Musa Bello Learning Center). 
With huge interest in ICT and financial Technology.`

const Background = () => {
    return (
        <div className='pro__container'>
            <h5>Biography</h5>
            <div className="text__container">
                <p>{data}</p>
            </div>
            <div className="list__container">
                <ul>
                    <li>Nationality: <span>Nigeria.</span></li>
                    <li>State of Origin: <span>Edo State.</span></li>
                    <li>Date of Birth: <span>December 20th, 1993.</span></li>
                </ul>
            </div>

        </div>
    )
}

export default Background
import React from 'react'
import './About.css';


const Entertain = () => {
    return (
        <div className='pro__container'>
            <h5>Hubbies & Position Held</h5>
            <div className="text__container grid__con">
                <div className="position__container hubb__container">
                    <h5>Position Held</h5>
                    <ul>
                        <li>Currently Audit manager at UF Idiagi & Co</li>
                        <li>Secretary to Technical Committe, ICAN Kaduna District.</li>
                        <li>Served as Presiding Officer at 2019 Nigeria National Election</li>
                        <li>Financial Secretary... National Youth Service Corps (NYSC)</li>
                        {/* <li>Cardio Excerse</li> */}
                    </ul>
                </div>
                <div className="hubb__container licore">
                    <h5><span>Hubbies</span></h5>
                    <ul>
                        <li>Playing Football</li>
                        <li>Recit's Holy Quran</li>
                        <li>Listen to Audio Book</li>
                        <li>Painting & Drawing</li>
                        {/* <li>Cardio Excerse</li> */}
                    </ul>
                </div>


            </div>

        </div>
    )
}

export default Entertain
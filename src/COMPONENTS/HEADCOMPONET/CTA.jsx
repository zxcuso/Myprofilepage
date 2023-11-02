import React from 'react'
import CV from '../../ASSETS/Abdulwahab__Cv.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn btn-transform'>Download Cv</a>
            <a href="#contact" className='btn btn-primary btn-transformn'>Contact Me</a>
        </div>
    )
}

export default CTA
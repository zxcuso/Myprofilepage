import React from 'react'
import './Footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'

const FooterSocials = () => {
    return (
        <div >
            {/* <h5 className='hidee'>visit me on...</h5> */}
            <div className='header__socials'>
                <a href="https://linkedin.com" target='_blank' rel='noopener noreferrer'><div className='my-iconsocial mj'><BsLinkedin /></div></a>
                <a href="https://github.com" target='_blank' rel='noopener noreferrer'><div className='my-iconsocial mj'><BsGithub /></div></a>
                <a href="https://dribble.com" target='_blank' rel='noopener noreferrer'><div className='my-iconsocial mj'><BsFacebook /></div></a>
                <a href="https://" target='_blank' rel='noopener noreferrer'><div className='my-iconsocial mj'><GrInstagram /></div></a>
            </div>
        </div>
    )
}

export default FooterSocials
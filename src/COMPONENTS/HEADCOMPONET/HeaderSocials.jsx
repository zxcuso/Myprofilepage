import React from 'react'
import './Header.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'

const HeaderSocials = () => {
    return (
        <div>
            <h5>visit me on...</h5>
            <div className='header__socials'>
                <a href="https://linkedin.com" target='_blank' rel='noopener noreferrer'><div className='my-iconsocial'><BsLinkedin /></div></a>
                <a href="https://github.com" target='_blank' rel='noopener noreferrer'><div className='my-iconsocial'><BsGithub /></div></a>
                <a href="https://dribble.com" target='_blank' rel='noopener noreferrer'><div className='my-iconsocial'><BsFacebook /></div></a>
                <a href="https://" target='_blank' rel='noopener noreferrer'><div className='my-iconsocial'><GrInstagram /></div></a>
            </div>
        </div>
    )
}

export default HeaderSocials
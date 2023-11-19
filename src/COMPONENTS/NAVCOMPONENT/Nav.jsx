import React, { useState } from 'react';
import './Nav.css';
import { AiFillHome } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { FaBookReader } from 'react-icons/fa';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { BiMessageDetail } from 'react-icons/bi'




const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')}
                className={activeNav === '#' ? 'active' : ''}> <AiFillHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'active' : ''}> <FaUserCircle /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')}
                className={activeNav === '#experience' ? 'active' : ''}> <FaBookReader /></a>
            <a href="#portfolio" onClick={() => setActiveNav('#services')}
                className={activeNav === '#services' ? 'active' : ''}> <MdOutlineMiscellaneousServices /></a>
            <a href="#foot" onClick={() => setActiveNav('#contact')}
                className={activeNav === '#contact' ? 'active' : ''}> < BiMessageDetail /></a>
        </nav>
    )
}

export default Nav
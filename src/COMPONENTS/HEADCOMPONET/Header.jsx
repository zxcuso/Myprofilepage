import React from 'react'
import './Header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import headimage from '../../ASSETS/IMG_20230922_162732.jpg'
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { BiSolidQuoteAltRight } from 'react-icons/bi';
import { BiSolidDownArrow } from 'react-icons/bi';
import { BiDownArrow } from 'react-icons/bi';

const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <div className="image__container">
                    <img src={headimage} alt="Phote of Yunusa Abdulwahab" />

                </div>
                <div className="header__detailcontainer">
                    <h4>Hello I'm</h4>
                    <h2>Yunusa Abdulwahab <small>ACA</small></h2>
                    <h4>Chartered Accountant, Auditor & Web Programmer</h4>
                    <p><BiSolidQuoteAltLeft className="my-icon" />a professional accountant with years of progressive experience in audit, tax and accountancy, with great interest in programming
                        <BiSolidQuoteAltRight className="my-iconr" /></p>

                    <CTA />
                    <HeaderSocials />

                </div>
                <div className='scroll__container'>
                    <a href="#foot" ><BiSolidDownArrow size={19} className='scroll__down' /> </a>
                    <a href="#foot" ><BiDownArrow size={18} className='scroll__down' /> </a>
                    <a href="#foot" ><BiDownArrow className='scroll__down' /></a>
                </div>
            </div>
        </header>
    )
}

export default Header
import React from 'react'
import './Footer.css';
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import FooterSocials from './FooterSocials';
import FooterServerse from './FooterServerse';
import { BiSolidUpArrow } from "react-icons/bi";
import { BiUpArrow } from "react-icons/bi";




const Footer = () => {
  return (
    <footer id='foot'>
       <div className='footer__container'>
        <div className="footer__title">
            <p>...why not leave a message on</p>
            {/* <BsEmojiSmileFill size={20} color='black'/> */}
            {/* <BsEmojiSmileUpsideDownFill size={20} color='black'/> */}
            
        </div>
            <div className="focontent">
                  <button className='button__footer'>
                    <a href="mailto:momugo44@gmail.com">
                        <div className='links'>
                        <h3>Email</h3>
                         <MdEmail size={25} color='rgb(215, 60, 4)'/>
                        </div>
                    </a>
                  </button>
                  <button className='button__footer'>
                    <a href="https://m.me/yunusa.abdulwahab.18" >
                        <div className='links'>
                          <h3>Messenger</h3>
                          <FaFacebookMessenger size={23} color='rgb(215, 60, 4)'/>
                        </div>
                    </a>
                  </button>
                  <button className='button__footer'>
                    <a href="https://wa.me/+23408074720555" >
                        <div className='links'>
                          <h3>Whatsapp</h3>
                          <IoLogoWhatsapp  size={25} color='rgb(215, 60, 4)'/>
                        </div>
                    </a>
                  </button>

            </div>
            <FooterServerse />
            <FooterSocials/>

            {/* <div className='scroll__container'>
                    <a href="#foot" ><BiSolidDownArrow size={19} className='scroll__down' /> </a>
                    <a href="#foot" ><BiDownArrow size={18} className='scroll__down' /> </a>
                    <a href="#foot" ><BiDownArrow className='scroll__down' /></a>
                </div>
            </div> */}
           
       <div className="scroll__footer">
        <a href="#" >< BiUpArrow size={16}  className='scroll__up' /> </a>
        <a href="#" >< BiUpArrow size={18} className='scroll__up' /> </a>
        <a href="#" >< BiSolidUpArrow size={22} className='scroll__up buu' /> </a>
       </div>
        
    </div>

    </footer>
  )
}

export default Footer
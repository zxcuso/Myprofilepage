import React from 'react';
import './Footer.css';
import { MdAttachEmail } from "react-icons/md";
import { MdOutlineSmartphone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const FooterServerse = () => {
  return (
    <div className="footservices">
        <div className="inner__footer">
            <h3>SERVICES</h3>
            <ul>
                <li className='ter'>Audit & Assurance</li>
                <li className='ter'>Accountancy Services</li>
                <li className='ter'>Web Development</li>
            </ul>
        </div>
            {/* <hr className=' hrde'/> */}
        <div className="inner__footer inner__foot2">
            <h3>CONTACT</h3>
            <ul>
                <li className='footcont'>
                    <MdAttachEmail size={22} color='darkgreen'/>
                    <h4>momugo44@gmail.com</h4>
                </li>
                <li className='footcont'>
                    <MdOutlineSmartphone size={23} color='darkgreen'/>
                    <h4>080 747 20555</h4>
                </li>
                <li className='footcont'>
                    <FaLocationDot size={23} color='darkgreen'/>
                    <h4>Nigeria</h4>
                </li>
            </ul>
        </div>


    </div>
  )
}

export default FooterServerse
import React from 'react'
import './Servicon.css'
import {ImHtmlFive} from 'react-icons/im';
import {IoLogoCss3} from 'react-icons/io';
import {TbBrandJavascript} from 'react-icons/tb';
import {FaReact} from 'react-icons/fa';

const Frontend = () => {
  return (
    <div className='front__container'>
        <div className="front__child">
            <ImHtmlFive size={39} color='#F06529'/>
            <p>HTML</p>
        </div>
        <div className="front__child">
            <IoLogoCss3 size={43} color='#264de4'/>
            <p>CSS</p>
        </div>
        <div className="front__child">
            < TbBrandJavascript size={43} color='#F0DB4F'/>
            <p>Javascript</p>
        </div>
        <div className="front__child">
            < FaReact size={43} color='#61dbfb'/>
            <p>React Js</p>
        </div>

        
    </div>
  )
}

export default Frontend
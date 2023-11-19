import React, { useState } from 'react'
import './Servicon.css'
import Frontend from './Frontend'
import Backend from './Backend'


const LangCon = () => {
 const[Language, setLanguage] = useState(0);

 const compont = [
    <div><Frontend /></div>,
    <div><Backend /></div>
 ]

 const ChangeLUi = (index) => {
    setLanguage(index)
 };

  return (
    <div className='languag__con'>
        <div className='languagebutton'>
        <button onClick={()=>{ChangeLUi(0)}} className='lan__button left  right__left'>Front End</button>
        <button onClick={()=>{ChangeLUi(1)}} className='lan__button right'> Back End</button>
        </div>
        {compont[Language]}

    </div>
  )
}

export default LangCon
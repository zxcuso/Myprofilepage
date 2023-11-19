import React, { useState } from 'react'
import Jobrep from './Jobrep'
import Quali from './Quali'
import Workhis from './Workhis'
import Skill from './Skill'
import Languages from './Languages'
import './Servicon.css'




const Servicon = () => {
    const [changeUi, setChangeUi] = useState(0);
    const conponents = [
        <div><Workhis /></div>,
        <div><Jobrep /></div>,
        <div> <Languages /></div>,
        <div><Quali /></div>,
        <div><Skill /></div>
    ]
    const OnchangeComponet = (index) => {
        setChangeUi(index)
    };

    return (
        <div>
            <div className='container__exp'>
                <button onClick={() => { OnchangeComponet(0) }} className='btn btn-other'> Work history</button>
                <button onClick={() => { OnchangeComponet(1) }} className='btn btn-other'> Job duties</button>
                <button onClick={() => { OnchangeComponet(2) }} className='btn btn-other'> Languages</button>
                <button onClick={() => { OnchangeComponet(3) }} className='btn btn-other'> Certificate</button>
                {/* <button onClick={() => { OnchangeComponet(4) }} className='btn btn-other '> Skills</button> */}

            </div>

            {conponents[changeUi]}
        </div>
    )
}

export default Servicon
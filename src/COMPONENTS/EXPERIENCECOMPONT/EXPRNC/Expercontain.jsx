import React, { useState } from 'react'
import Auditservice from './Auditservice'
import Consultancy from './Consultancy'
import Web from './Web'
import './Expercontain.css'



const Expercontain = () => {
    const [activeComponent, setActiveComponent] = useState(0);

    const component = [
        <div><Auditservice /></div>,
        <div><Consultancy /></div>,
        <div><Web /></div>
    ]

    const OnChangeComponent = (index) => {
        setActiveComponent(index)
    }
    return (
        <>
            <div className='container__service'>
                <button onClick={() => { OnChangeComponent(0) }} className='btn btn-other'> Audit & Assurance</button>
                <button onClick={() => { OnChangeComponent(1) }} className='btn btn-other'> Consultancy</button>
                <button onClick={() => { OnChangeComponent(2) }} className='btn btn-other'> Web Design</button>
            </div>

            {component[activeComponent]}
        </>
    )
}

export default Expercontain
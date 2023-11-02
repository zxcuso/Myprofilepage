import React, { useState } from 'react'
import './Portfolio.css';
import AuditPortfolio from './AuditPortfolio';
import ConsultPortfolio from './ConsultPortfolio';
import WebPortfolio from './WebPortfolio';

const PortfolioContainer = () => {

    const [Activetab, setActivetab] = useState(0);

    const components = [
        <div><AuditPortfolio /></div>,
        <div><ConsultPortfolio /></div>,
        <div><WebPortfolio /></div>
    ];

    const ChangeComponet = (index) => {
        setActivetab(index)
    }

    return (
        <>
            <div className='port__head'>
                <div className='portfo__he'>
                    <button onClick={() => { ChangeComponet(0) }} className='portfo__buttons'>  Audit & Assurance </button>
                    <button onClick={() => { ChangeComponet(1) }} className='portfo__buttons'> Consultancy </button>
                    <button onClick={() => { ChangeComponet(2) }} className='portfo__buttons'> Web Design </button>

                </div>
                <hr />
            </div>


            {components[Activetab]}
        </>
    )
}

export default PortfolioContainer
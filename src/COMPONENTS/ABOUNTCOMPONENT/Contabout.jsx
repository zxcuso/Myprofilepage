import React, { useState } from 'react'
import './About.css';
import Professional from './Professional';
import Background from './Background';
import Entertain from './Entertain';


const Contabout = () => {
    const [activeComponent, setActiveComponent] = useState(0);

    const component = [
        <div> <Professional /></div>,
        <div> <Background /></div>,
        <div><Entertain /></div>
    ];

    const changeComponent = (index) => {
        setActiveComponent(index)
    };


    return (
        <div>
            <div className='about__button'>
                <button onClick={() => changeComponent(0)} className='btn'>Professional Summary</button>
                <button onClick={() => changeComponent(1)} className='btn'>Biography</button>
                <button onClick={() => changeComponent(2)} className='btn'>Interest </button>
            </div>
            {component[activeComponent]}
        </div>
    )
};

export default Contabout
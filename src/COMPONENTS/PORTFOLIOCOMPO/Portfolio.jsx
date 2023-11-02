import React from 'react'
import './Portfolio.css';
import PortfolioContainer from './PortfolioContainer';

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <div className="head__title">
                <h1>My Portfolio</h1>
            </div>

            <div className="container">
                <PortfolioContainer />
            </div>
        </section>
    )
}

export default Portfolio
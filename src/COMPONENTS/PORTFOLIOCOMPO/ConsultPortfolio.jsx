import React from 'react'
import './Portfolio.css'

const data = [
    {
        id: 1,
        headone: 'TEAM ',
        headtwo: 'LEAD',
        year: 'Defend client On',
        service: 'Tax Fraud Investigation by the',
        company: 'Economic & Financial Crime Commission (EFCC)'

    },
    {
        id: 2,
        headone: 'TEAM',
        headtwo: 'LEAD',
        year: 'Tax Liability Examination & Computation',
        service: 'For the Period: 2020, 2021 & 2022',
        company: 'Ashmed Specialist Hospital.'
    },

    {
        id: 3,
        headone: 'TEAM',
        headtwo: 'LEAD',
        year: 'Inventory & Stock Count Service',
        service: 'For the Period: 2021 & 2022',
        company: "Sidi & Son's Supermarket."
    },
    {
        id: 4,
        headone: 'TEAM',
        headtwo: 'LEAD',
        year: 'Inventory & Stock Count Service',
        service: 'For the Period: 2023',
        company: "Gadzama & Son's Supermarket"
    }
]

const ConsultPortfolio = () => {
    return (
        <section className='main__port-container'>
            <div className='portfolio__content'>
                {
                    data.map(({ id, headone, headtwo, year, service, company }) => {
                        return (
                            <div key={id} className="portfolio__info">
                                <div className="innerdiv1__port">
                                    <h3 className='hfour'>{headone}</h3>
                                    <h3 className='headtwo'>{headtwo}</h3>
                                </div>

                                <div className="innerdiv2__port">
                                    <h5 className="hfive">{year}</h5>
                                    <h5>{service}</h5>
                                    <h6 className='hfour'>{company}</h6>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ConsultPortfolio
import React from 'react'
import './Portfolio.css'


const data = [
    {
        id: 1,
        headone: 'TEAM',
        headtwo: 'LEAD',
        year: 'Year 2022',
        service: 'Statutory Audit',
        company: 'Hadiraf Cereal & Oil Mill Ltd'

    },
    {
        id: 2,
        headone: 'TEAM',
        headtwo: 'LEAD',
        year: 'Year 2022',
        service: 'Statutory Audit',
        company: 'Bleet Nigeria Limited'

    },
    {
        id: 3,
        headone: 'TEAM',
        headtwo: 'LEAD',
        year: 'Year 2021',
        service: 'Statutory Audit',
        company: 'Sindyan Nigeria Limited'

    },
    {
        id: 4,
        headone: 'TEAM',
        headtwo: 'MEMBER',
        year: 'Year 2021',
        service: 'Statutory Audit',
        company: 'Infinite X2 Health Maintenance Services Ltd'

    },
    {
        id: 5,
        headone: 'TEAM',
        headtwo: 'MEMBER',
        year: 'Year 2020',
        service: 'Statutory Audit',
        company: 'Ashmed Specialist Hospital Ltd'

    },
    {
        id: 6,
        headone: 'TRAINEE',
        headtwo: '',
        year: 'Year 2018',
        service: 'Statutory Audit',
        company: 'Grand Central Hotel Kano'

    }
]

const AuditPortfolio = () => {
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

export default AuditPortfolio
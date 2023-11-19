// import React from 'react'
// import './Portfolio.css'

// const data = [
//     {
//         id: 1,
//         headone: 'TEAM ',
//         headtwo: 'LEAD',
//         year: 'Defend client On',
//         service: 'Tax Fraud Investigation by the',
//         company: 'Economic & Financial Crime Commission (EFCC)'

//     },

//     {
//         id: 1,
//         position: 'TEAM LEAD',
//         audityear: '2022 Financial Statutory Audit',
//         company: 'Hadiraf Cereal & Oil Mill Ltd',
//         tool1: 'Audit checklist',
//         tool2: 'Audit interview',
//         tool3: 'Audit observation',
//         tool4: 'Audit report',
//         role1: 'Audit planning',
//         role2: 'Audit communication',
//         role3: 'Prepare audit report',

//     },
//     {
//         id: 2,
//         headone: 'TEAM',
//         headtwo: 'LEAD',
//         year: 'Tax Liability Examination & Computation',
//         service: 'For the Period: 2020, 2021 & 2022',
//         company: 'Ashmed Specialist Hospital.'
//     },

//     {
//         id: 3,
//         headone: 'TEAM',
//         headtwo: 'LEAD',
//         year: 'Inventory & Stock Count Service',
//         service: 'For the Period: 2021 & 2022',
//         company: "Sidi & Son's Supermarket."
//     },
//     {
//         id: 4,
//         headone: 'TEAM',
//         headtwo: 'LEAD',
//         year: 'Inventory & Stock Count Service',
//         service: 'For the Period: 2023',
//         company: "Gadzama & Son's Supermarket"
//     }
// ]

// const ConsultPortfolio = () => {
//     return (
//         <section className='main__port-container'>
//             <div className='portfolio__content'>
//                 {
//                     data.map(({ id, position, audityear, company, tool1, tool2, tool3, tool4, role1, role2, role3  }) => {
//                         return (
//                              <div key={id} className="audit__background">
//                     <div className="audit__content">
//                         <div className="team__lead">
//                             <p className='team__p'>{position}</p>
//                               <div className="audit__period">
//                                <p>{audityear}</p>
//                             </div>
//                         </div>
//                         <div className="audit__coy">
//                         <BiSolidBusiness color='darkblue' size={23} className='iconteam'/>
//                             <h3>{company}</h3>
//                         </div>
//                         <div className="audit__skill">
//                             <div className="audit__tools">
//                                 <h4>Tools</h4>
//                                 <div className="audittools__content">
//                                     <ul className='just__line'>
//                                         <li>{tool1}</li>
//                                         <li>{tool2}</li>
//                                         <li>{tool3}</li>
//                                         <li>{tool4}</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="audit__role">
//                                 <h4>Role</h4>
//                                 <div className="audittools__content">
//                                 <ul >
//                                     <li>{role1}</li>
//                                     <li>{role2}</li>
//                                     <li>{role3}</li>
//                                 </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
                 
//                 </div>
//                         )
//                     })
//                 }
//             </div>
//         </section>
//     )
// }

// export default ConsultPortfolio
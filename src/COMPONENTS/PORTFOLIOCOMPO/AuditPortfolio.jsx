import React from 'react'
import './Portfolio.css'
import {BiSolidBusiness} from 'react-icons/bi';

import { Navigation, Pagination, Autoplay, A11y} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
    {
        id: 1,
        position: 'TEAM LEAD',
        audityear: '2022 Financial Statutory Audit',
        company: 'Hadiraf Cereal & Oil Mill Ltd',
        tool1: 'audit checklist',
        tool2: 'audit interview',
        tool3: 'audit observation',
        tool4: 'audit report',
        role1: 'audit planning',
        role2: 'audit communication',
        role3: 'prepare audit report',

    },
    
    {
        id: 2,
        position: 'TEAM LEAD',
        audityear: '2022 Financial Statutory Audit',
        company: 'Bleet Nigeria Limited',
        tool1: 'audit checklist',
        tool2: 'audit interview',
        tool3: 'audit observation',
        tool4: 'audit report',
        role1: 'audit planning',
        role2: 'audit communication',
        role3: 'prepare audit report',

    },
    
    {
        id: 3,
        position: 'TEAM LEAD',
        audityear: '2021 Financial Statutory Audit',
        company: 'Sindyan Nigeria Limited',
        tool1: 'audit checklist',
        tool2: 'audit interview',
        tool3: 'audit observation',
        tool4: 'audit report',
        role1: 'audit planning',
        role2: 'audit communication',
        role3: 'prepare audit report',

    },
    
    
    {
        id: 4,
        position: 'MEMBER',
        audityear: '2021 Financial Statutory Audit',
        company: 'Infinite X2 Health Ltd',
        tool1: 'audit checklist',
        tool2: 'audit interview',
        tool3: 'audit observation',
        tool4: 'audit report',
        role1: 'test internal control',
        role2: '',
        role3: '',

    },
    
    {
        id: 5,
        position: 'MEMBER',
        audityear: '2020 Financial Statutory Audit',
        company: 'Ashmed Specialist Hospital Ltd',
        tool1: 'audit checklist',
        tool2: 'audit interview',
        tool3: 'audit observation',
        tool4: 'audit report',
        role1: 'vouching ',
        role2: '',
        role3: '',

    },
    
    {
        id: 6,
        position: 'MEMBER',
        audityear: '2020 Financial Statutory Audit',
        company: 'Grand Central Hotel Kano',
        tool1: 'audit checklist',
        tool2: 'audit interview',
        tool3: 'audit observation',
        tool4: 'audit report',
        role1: 'vouching ',
        role2: '',
        role3: '',

    },
    
]

const AuditPortfolio = () => {
    return (
        <section className='main__port-container_audit'>
            <div className='portfolio__content_audit'>

            <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            spaceBetween={8}
            slidesPerView={1}
            breakpoints ={{
                600:{
                    width: 600,
                    slidesPerView: 1,
                },
                1024:{
                    width: 1024,
                    slidesPerView: 2,
                }
            }}
            // autoplay={{
            //     delay: 500,
            //     disableOnInteraction: false,
            // }}
            speed={1000}
            navigation
            // loop={true}
            pagination = {{clickable: true}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}

            className="swiper-container"
            >

                
                {
                    data.map(({ id, position, audityear, company, tool1, tool2, tool3, tool4, role1, role2, role3  }) => {
                        return (
                             <SwiperSlide key={id} className="audit__background swiper-slide">
                    <div className="audit__content">
                        <div className="team__lead">
                            <p className='team__p'>{position}</p>
                              <div className="audit__period">
                               <p>{audityear}</p>
                            </div>
                        </div>
                        <div className="audit__coy">
                        <BiSolidBusiness color='black' size={23} className='iconteam'/>
                            <h3>{company}</h3>
                        </div>
                        <div className="audit__skill">
                            <div className="audit__tools">
                                <h4>Tools</h4>
                                <div className="audittools__content">
                                    <ul className='just__line'>
                                        <li>{tool1}</li>
                                        <li>{tool2}</li>
                                        <li>{tool3}</li>
                                        <li>{tool4}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="audit__role">
                                <h4>Role</h4>
                                <div className="audittools__content">
                                <ul >
                                    <li>{role1}</li>
                                    <li>{role2}</li>
                                    <li>{role3}</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            </div>
            
        </section>
    )
}

export default AuditPortfolio
import React from 'react'
import './Portfolio.css'
import IM3 from '../../ASSETS/portfolio3.jpg';
import {BiLogoReact} from 'react-icons/bi';
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';

import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
    {
        id: 1,
        Image:IM3 ,
        alt: 'photo of the app',
        title: 'e-Prime Book Entry',
        detail: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui odio quae architecto provident deserunt soluta pariatur nam ipsum magnam, repellendus vitae nulla quasi dicta quisquam, vero, alias reprehenderit. Debitis, doloribus.',
        icon1: <BiLogoReact size={25}/>, lebel:'React js',
        icon2: <AiFillHtml5 size={25}/>, lebel2: 'HTML',
        icon3: <DiCss3 size={20}/>, lebel3:'CSS',

    },

    {
        id: 2,
        Image:IM3 ,
        alt: 'photo of the app',
        title: 'e-Prime Book Entry',
        detail: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui odio quae architecto provident deserunt soluta pariatur nam ipsum magnam, repellendus vitae nulla quasi dicta quisquam, vero, alias reprehenderit. Debitis, doloribus.',
        icon1: <BiLogoReact size={20}/>, lebel:'React js',
        icon2: <AiFillHtml5 size={20}/>, lebel2: 'HTML',
        icon3: <DiCss3 size={20}/>, lebel3:'CSS',

    },
    {
        id: 3,
        Image:IM3 ,
        alt: 'photo of the app',
        title: 'e-Prime Book Entry',
        detail: 'Lorem ipsum dolor, sit amet jjjjj ftuytutyftfyyt dyrtrdy consectetur adipisicing elit. Qui odio quae architecto provident deserunt soluta pariatur nam ipsum magnam, repellendus vitae nulla quasi dicta quisquam, vero, alias reprehenderit. Debitis, doloribus.',
        icon1: <BiLogoReact size={20}/>, lebel:'React js',
        icon2: <AiFillHtml5 size={20}/>, lebel2: 'HTML',
        icon3: <DiCss3 size={20}/>, lebel3:'CSS',

    },

]


const WebPortfolio = () => {
    return (
        <section className='main__port-container_web'>
            <div className='portfolio__content_web'>

            <Swiper
             modules={[Navigation, Pagination, A11y]}
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
             speed={500}
             navigation
             // loop={true}
             pagination = {{clickable: true}}
             onSwiper={(swiper) => console.log(swiper)}
             onSlideChange={() => console.log('slide change')}
             onReachEnd={() => {/*...*/}}
 
             className="swiper-container"
            >

            {   
              data.map(({id, Image, alt, title, detail, icon1, icon2, icon3, lebel, lebel2, lebel3 }) =>{
              return(
                <SwiperSlide key={id} className='webport__items'>
                <div className='web__portimg'>
                    <img src={Image} alt={alt} />
                </div>
                <div className='project__title'>
                    <p>{title}</p>
                  

                    <div className='description__web'>
                        <h5>PROJECT DISCRIPTION</h5>
                        <p>{detail}</p>
                    </div>
                    
                </div>
                {/* <hr className='hr__web'/> */}
                <h5 className='lang__web'>Languages</h5>
                <div className='web__language'>
                    <div className='web__icons'>{icon1}<h5>{lebel}</h5></div>
                    <div className='web__icons'>{icon2}<h5>{lebel2}</h5></div>
                    <div className='web__icons'>{icon3}<h5>{lebel3}</h5></div>
                </div>
                {/* <hr className='hr__web'/> */}

                <div className='web__btn'>
                    
                    <a href="https://github.com" className='btn but__web'><h5>Github</h5></a>
                    
                    <a href="https://dribble.com" className='btn but__web'><h5>Live Demo</h5></a>
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

export default WebPortfolio
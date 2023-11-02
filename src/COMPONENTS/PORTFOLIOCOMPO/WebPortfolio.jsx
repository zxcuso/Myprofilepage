import React from 'react'
import './Portfolio.css'
import IM3 from '../../ASSETS/portfolio3.jpg';
import {BiLogoReact} from 'react-icons/bi';
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';




const WebPortfolio = () => {
    return (
        <section className='main__port-container_web'>
            <div className='portfolio__content_web'>
              <article className='webport__items'>
                <div className='web__portimg'>
                    <img src={IM3} alt="web page image" />
                    
                </div>
                <div className='project__title'>
                    <h3>Figma Dashboard UI kit for data</h3>
                  

                    <div className='description__web'>
                        <h4>Project brief discription</h4>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui odio quae architecto provident deserunt soluta pariatur nam ipsum magnam, repellendus vitae nulla quasi dicta quisquam, vero, alias reprehenderit. Debitis, doloribus.
                        </p>
                    </div>
                    
                </div>
                <hr className='hr__web'/>
                <h5 className='lang__web'>Languages</h5>
                <div className='web__language'>
                    <div className='web__icons'><BiLogoReact size={20}/> <h5>React js</h5></div>
                    <div className='web__icons'><AiFillHtml5 size={20}/> <h5>HTML</h5></div>
                    <div className='web__icons'><DiCss3 size={20}/> <h5>CSS</h5></div>
                </div>
                <hr className='hr__web'/>

                <div className='web__btn'>
                    <div className='hr__webb'>
                    <a href="https://github.com" className='btn but__web'><h5>Github</h5></a>
                    </div>
                    <a href="https://dribble.com" className='btn but__web'><h5>Live Demo</h5></a>
                </div>

                </article>
            </div>
        </section>
    )
}

export default WebPortfolio
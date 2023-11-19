import React from 'react';
import './index.css';
import Header from './COMPONENTS/HEADCOMPONET/Header';
import Nav from './COMPONENTS/NAVCOMPONENT/Nav';
import About from './COMPONENTS/ABOUNTCOMPONENT/About';
import Experience from './COMPONENTS/EXPERIENCECOMPONT/Experience';
import Portfolio from './COMPONENTS/PORTFOLIOCOMPO/Portfolio';
import Log from './COMPONENTS/LOGCOMPONENT/Log';
import Footer from './COMPONENTS/FOOTER/Footer';


const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Portfolio />
             <Log /> 
            <Footer />
        </>
    );
};

export default App;
import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
           <Banner />
           <Services />
           <About />
           <Contact />
           <Info />
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import HFooter from './HFooter';
import Info from './Info';

const Home = () => {
    return (
        <div>
           <Banner />
           <Contact />
           <Info />
           <HFooter />
        </div>
    );
};

export default Home;
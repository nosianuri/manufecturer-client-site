import React from 'react';
import camera from '../../assets/images/camera.png';
import FigureButton from '../Shared/FigureButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img width={550} src={camera} alt="banner" />
                <div>
                    <h1 data-aos='fade-right' data-aos-delay='200' data-aos-duration='1000' className="text-6xl font-bold uppercase">Premium Equipment</h1>
                    <p data-aos='fade-right' data-aos-delay='400' data-aos-duration='900' className="py-6 text-3xl text-bold">Get your driver from your camera manufacturer website exercitationem quasi. Update your camera driver automatically.</p>
                    <FigureButton  data-aos-delay='1300' data-aos='zoom-in' >Get started</FigureButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;
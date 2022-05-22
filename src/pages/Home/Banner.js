import React from 'react';
import camera from '../../assets/images/camera.png';
import bg from '../../assets/images/bg.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img width={550} src={camera} alt="banner"/>
                <div>
                    <h1 class="text-6xl font-bold">Premium Equipment</h1>
                    <p class="py-6 text-3xl text-bold">Get your driver from your camera manufacturer website exercitationem quasi. Update your camera driver automatically.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
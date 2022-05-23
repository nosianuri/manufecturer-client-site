import React from 'react';
import composite from '../../assets/images/composite.png';
import FigureButton from '../Shared/FigureButton';

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <img height={300} src={composite} className="max-w-sm rounded-lg shadow-2xl" alt='composite' />
                <div>
                    <h1 className="text-5xl font-bold uppercase">10 Years of Manufacturing Excellence</h1>
                    <p className="py-6 text-xl text-bold">Today, the Subaru MF Company continues to be the leading supplier of photographic darkroom equipment for the educational market. Proudly made in the BD, at a modern manufacturing facility in Stroudsburg, Pennsylvania, Subaru MF's line of high-quality photographic equipment continues to withstand the test of time and remains the industry standard for professionals and amateurs alike.</p>
                    <FigureButton>See Details</FigureButton>
                </div>
            </div>
        </div>
    );
};

export default About;
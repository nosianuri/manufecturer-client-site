import React from 'react';
import FigureButton from '../Shared/FigureButton';

const Contact = () => {
    return (
        <section className='bg-primary py-14 my-28'>
            <div className='py-10'>
            <div className='text-center pb-14 text-white'>
                <p className='text-xl font-bold text-transparent bg-clip-text bg-white'>
                    Contact Us
                </p>
                <h1 className='text-4xl'>Stay connected with us</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <FigureButton>Submit</FigureButton>
            </div>
        </div>
        
        </section>
    );
};

export default Contact;
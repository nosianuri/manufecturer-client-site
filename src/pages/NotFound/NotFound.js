import React from 'react';
import notfound from '../../assets/images/notfound.jpg';

const NotFound = () => {
    return (
        <div className='text-center'>
            <img className='ml-16 pl-5 justify-center items-center' height={500} width={1000} src={notfound} alt="notfound" />
        </div>
    );
};

export default NotFound;
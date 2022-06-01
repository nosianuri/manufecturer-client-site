import React, { useEffect, useState } from 'react';
import Purchase from '../Purchase/Purchase';
import Service from './Service';

const Services = () => {
    const [purchase, setPurchase] = useState();
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://thawing-depths-15200.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);




    return (
        <div>
            <div className='text-center'>
                <h3 className='text-primary text-3xl font-bold uppercase'>Equipment Overview </h3>
                <p className='p-10 text-xl'>From enlargers and light sources to copy stands and easels, Beseler offers the highest quality photographic equipment, all backed by an experienced sales and service team. See why photographers have trusted our products for generations. </p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            {
                purchase && <Purchase
                    purchase={purchase}
                    setPurchase={setPurchase}
                ></Purchase>
            }
        </div>
    );
};

export default Services;
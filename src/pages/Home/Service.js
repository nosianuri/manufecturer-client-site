import React from 'react';
import FigureButton from '../Shared/FigureButton';

const Service = ({ service }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img width={100} src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <h3>{service.description}</h3>
                <h4>Quantity: {service.quantity}</h4>
                <h5>Price: {service.price}</h5>

                <div className="card-actions">
                    <FigureButton>Buy Now</FigureButton>
                </div>
            </div>
        </div>
    );
};

export default Service;
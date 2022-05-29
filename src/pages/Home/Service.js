import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    // const [quantity, setQuantity] = useState(1);
    const { _id, name, img, description, price} = service;
    const navigate = useNavigate();

    // const handleIncrement = () => {
    //     if(quantity < 50){
    //         setQuantity(prevCount => prevCount + 1);
    //     }
               
    // }

    // const handleDecrement = () => {
    //     if(quantity > 5){
    //     setQuantity(prevCount => prevCount - 1);
    //     }
    // }

    const navigateToServiceDetail = () =>{
        navigate(`/purchase`);
    }

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img width={100} src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <h3>{service.description}</h3>
                <h5><span className='font-bold'>Price:</span> {service.price}/pcs</h5>
                <h3><span className='font-bold'>Available:</span>  {service.available}</h3>
                <h4><span className='font-bold'>Miniquantity:</span>  {service.miniquantity}</h4>
                <h4><span className='font-bold'>Maxquantity:</span>  {service.maxquantity}</h4>
                {/* <p ><FontAwesomeIcon onClick={handleIncrement} icon={faPlus}></FontAwesomeIcon>
                <FontAwesomeIcon onClick={handleDecrement} className=' pl-3' icon={faMinus}></FontAwesomeIcon></p> */}
                

                <div className="card-actions">
                    <button onClick={() =>navigateToServiceDetail(_id)} className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary hover:from-[#78716c] hover:to-[#292524]">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;
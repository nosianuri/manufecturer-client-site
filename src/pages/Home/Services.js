import React from 'react';
import Service from './Service';

const Services = () => {
    const products = [
        {
          "_id": 1,
          "name": "ACCESSORY",
          "price": 200,
          "description": "The new 50mm lens is now standard with our Cadet II® enlarger series. Both lenses come complete with jam nut/retaining ring. ",
          "quantity": 5,
          "img": "https://i.ibb.co/9rH3Gwt/accessory.webp"
        },
        {
            "_id": 2,
            "name": "BATTERY",
            "price": 100,
            "description": "All 23C III-XL accept formats up to and including 6x9cm and have ample space on the sturdy 16″x25½” white laminated baseboard. ",
            "quantity": 5,
            "img": "https://i.ibb.co/Pmr2P9W/battery.webp"
          },
          {
            "_id": 3,
            "name": "LENSES",
            "price": 80,
            "description": "These quality lenses designed exclusively by Subaru contain an additional lens element for exceptional sharpness and clarity. ",
            "quantity": 5,
            "img": "https://i.ibb.co/ZNLssD9/lenses.webp"
          },
          {
            "_id": 4,
            "name": "LENS",
            "price": 150,
            "description": " The improved lens design offers professional grade features, yet maintains an affordable price for educational or entry level programs. ",
            "quantity": 5,
            "img": "https://i.ibb.co/72hn228/Lens.webp"
          },
          {
            "_id": 5,
            "name": "TRIPOD",
            "price": 300,
            "description": "The camera platform moves on a single-straight vertical column, aided by a constant force, counter-balanced elevation system. ",
            "quantity": 5,
            "img": "https://i.ibb.co/CmN46sw/tripod.webp"
          },
          
          {
            "_id": 6,
            "name": "BATTERY COVER",
            "price": 60,
            "description": "Precision design rails made from aluminum extrusion ensure accuracy. Masking blades are detachable for individual arrangement.  ",
            "quantity": 5,
            "img": "https://i.ibb.co/D8h09xQ/battery-cover.png"
          }
      ];

    return (
        <div>
            <div className='text-center'>
            <h3 className='text-primary text-3xl font-bold uppercase'>Equipment Overview</h3>
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
        </div>
    );
};

export default Services;
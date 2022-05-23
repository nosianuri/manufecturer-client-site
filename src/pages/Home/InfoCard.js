import React from 'react';

const InfoCard = ({ img, cardTitle, cardDetail }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl my-28">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title uppercase">{cardTitle}</h2>
        <p>{cardDetail}</p>
      </div>
    </div>
  );
};

export default InfoCard;
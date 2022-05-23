import React from 'react';

const InfoCard = ({img, cardTitle, cardDetail}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title uppercase">{cardTitle}</h2>
    <p>{cardDetail}</p>
  </div>
</div>
    );
};

export default InfoCard;
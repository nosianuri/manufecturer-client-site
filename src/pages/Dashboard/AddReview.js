import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
    const url = `https://thawing-depths-15200.herokuapp.com/reviews`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
      })
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
              <div className="form-control">
                <input className='mb-2 input input-bordered' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
              </div>
              <div className="form-control">
                <textarea className='mb-2 input input-bordered' type="text" placeholder='Description' {...register("description")} />

              </div>
              <div className="form-control">
                <input className='mb-2 input input-bordered' placeholder='Address' {...register("address", { required: true, maxLength: 20 })} />
              </div>

              <div className="form-control">
                <input className='mb-2 input input-bordered' placeholder='Photo URL' type="text" {...register("img")} />

              </div>
              <div className="form-control mt-6">
                <input className=' input input-bordered bg-primary text-white font bold' type="submit" value="Add Service" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
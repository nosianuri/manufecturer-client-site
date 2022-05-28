import React, { useEffect, useState } from 'react';
import quote from '../../assets/icon/quote.png';
import ReviewDetail from './ReviewDetail';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://thawing-depths-15200.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);



    return (
        <section>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Reviews</h4>
                    <h2 className='text-3xl'>What our customers say</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="quote" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <ReviewDetail
                        key={review._id}
                        review={review}
                    ></ReviewDetail>)
                }
            </div>
        </section>
    );
};

export default Review;
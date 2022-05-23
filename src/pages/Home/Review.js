import React from 'react';
import quote from '../../assets/icon/quote.png';
import lee from '../../assets/images/Lee jong suk.png';
import jhope from '../../assets/images/J-hope.png';
import kim from '../../assets/images/Kim taehyng.png';
import ReviewDetail from './ReviewDetail';

const Review = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Lee Jong Suk',
            review: '',
            location: 'Rajshahi',
            img: lee
        },
        {
            _id: 2,
            name: 'Jung Heasok',
            review: '',
            location: 'Dhaka',
            img: jhope
        },
        {
            _id: 3,
            name: 'Kim Teayung',
            review: '',
            location: 'Bogura',
            img: kim
        },
    ];

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
                    reviews.map(review =><ReviewDetail
                    key={review._id}
                    review={review}
                    ></ReviewDetail>)
                }
            </div>
        </section>
    );
};

export default Review;
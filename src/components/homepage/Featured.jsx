import React from 'react';
import FeaturedCowCard from './FeaturedCowCard';

const Featured = async() => {
    const res = await fetch("https://b-13-a-8-api.onrender.com/animals");
    const resData = await res.json();
    // console.log(resData);
    return (
        <div className='w-[90%] md:container mx-auto my-20  px-8'>
            <h1 className='text-2xl md:text-4xl font-bold mb-4'>Featured Animals</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    resData.slice(0, 4).map(cow=> <FeaturedCowCard key={cow.id}
                    cow={cow}/>)
                }
            </div>
        </div>
    );
};

export default Featured;
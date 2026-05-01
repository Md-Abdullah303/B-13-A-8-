import { Card, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const FeaturedCowCard = ({cow}) => {
    console.log(cow);
    return (
        <Card className='border rounded-lg duration-300 hover:-translate-y-3 cursor-pointer hover:shadow-xl'>
            <div className="relative w-full h-60 aspect-square rounded-lg overflow-hidden">
            <Image className='absolute w-full  object-cover rounded-lg' src={cow.image} alt={cow.name} width={300} height={200}/>
            <Chip className='absolute top-4 right-4' color='accent'>{cow.type}</Chip>
            </div>
            <h1 className='text-2xl font-bold'>{cow.name}</h1>
            <p className='text-lg text-green-500 font-semibold'>{cow.price} TK</p>
        </Card>
    );
};

export default FeaturedCowCard;
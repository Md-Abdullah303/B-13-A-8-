import React from 'react';
import cowBareed1 from '@/assets/cowBareed1.jpg'
import cowBareed2 from '@/assets/cowBareed2.jpg'
import cowBareed3 from '@/assets/cowBareed3.jpg'
import cowBareed4 from '@/assets/cowBareed4.jpg'
import Image from 'next/image';
import { Card } from '@heroui/react';

const TopBreeds = () => {
    return (
        <div className='w-[90%] md:container mx-auto py-20 px-10 space-y-6'>
            <h1 className="text-xl md:text-3xl font-bold">Top Breeds</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5 md:gap-10">
                <Card className="flex flex-col items-center gap-3 rounded-lg border duration-150 hover:-translate-y-1.5 shadow-sm hover:shadow-lg">
                    <div className="">
                        <Image
                        src={cowBareed4}
                        alt='cowBareed4 img'
                        width={100}
                        height={100}
                        />
                    </div>
                    <p className='text-lg md:text-xl font-bold'>Brahman</p>
                </Card>
                <Card className="flex flex-col items-center gap-3 rounded-lg border duration-150 hover:-translate-y-1.5 shadow-sm hover:shadow-lg">
                    <div className="">
                        <Image
                        src={cowBareed3}
                        alt='cowBareed3 img'
                        width={100}
                        height={100}
                        />
                    </div>
                    <p className='text-lg md:text-xl font-bold'>Sahiwal</p>
                </Card>
                <Card className="flex flex-col items-center gap-3 rounded-lg border duration-150 hover:-translate-y-1.5 shadow-sm hover:shadow-lg">
                    <div className="">
                        <Image
                        src={cowBareed2}
                        alt='cowBareed2 img'
                        width={100}
                        height={100}
                        />
                    </div>
                    <p className='text-lg md:text-xl font-bold'>Jersey</p>
                </Card>
                <Card className="flex flex-col items-center gap-3 rounded-lg border duration-150 hover:-translate-y-1.5 shadow-sm hover:shadow-lg">
                    <div className="">
                        <Image
                        src={cowBareed1}
                        alt='cowBareed1 img'
                        width={100}
                        height={100}
                        />
                    </div>
                    <p className='text-lg md:text-xl font-bold'>Holstein Friesian</p>
                </Card>
                
            </div>
        </div>
    );
};

export default TopBreeds;
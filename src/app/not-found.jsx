import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='w-[90%] md:container mx-auto py-10 h-[66vh] flex items-center justify-center'>
            <div className="flex flex-col items-center gap-3">
                <h1 className='text-xl md:text-3xl font-bold'>404 - Page Not Found</h1>
                <p className='text-sm md:text-lg text-gray-400'>Return to the homepage</p>
                <Link href={'/'}><Button>Home</Button></Link>
            </div>
        </div>
    );
};

export default NotFoundPage;404
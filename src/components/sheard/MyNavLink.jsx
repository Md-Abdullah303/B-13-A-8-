'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyNavLink = ({href, children}) => {
    const path = usePathname();
    const isActive = path == href;
    return (
        <Link 
        className={`${isActive && 'border-b border-green-500 text-green-500'}
         hover:bg-slate-100
        `}
        href={href}>
            {children}
        </Link>
    );
};

export default MyNavLink;
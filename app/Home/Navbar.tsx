import React from 'react'
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { UserButton, useUser } from '@stackframe/stack';
import MenuBtn from './uiComponents/menu-btn';

export const Navbar: React.FC = () => {
    const user = useUser();

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='flex flex-row justify-between p-2 text-black sm:bg-transparent'>
            <div className="logo font-deltha flex  ">
                <span className='text-sm'>Expense</span>
                <span className='text-sm'> <span className='text-xl'>T</span>racker</span>
            </div>
            
            {isMobile ? (
                <>
                    {!user ?
                        <div className='ml-20 z-10'>
                            <UserButton />
                        </div>
                        : <div className='ml-20 z-10'>
                            <UserButton />
                        </div> }

                    <MenuBtn />
                </>
                
            ) : (<>
                <div className='flex flex-row gap-4 font-deltha text-xl '>
                    <Link href='/'>
                        <span className='text-sm border-r-2 border-black pr-2 hover:text-gray-600'>HOME</span>
                    </Link>
                    <Link href='/'>
                        <span className='text-sm border-r-2 border-black pr-2 hover:text-gray-600'>About</span>
                    </Link>
                    <Link href='/expense-tracker'>
                        <span className='text-sm hover:text-gray-600 hover:'>Tracker</span>
                    </Link>
                </div>

                    {!user ?
                        <div className='ml-20'>
                            <UserButton />
                        </div>
                        : <UserButton />}         
</>
                
            )}
            
        </div>
    )
}


export default Navbar;

import React from 'react'

import Link from 'next/link';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { UserButton, useUser } from '@stackframe/stack';

export const navbar: React.FC = () => {
    const user = useUser();

    return (
        <div className='flex flex-row justify-between p-2 text-black bg-white'>
            <div className="logo font-deltha flex  ">
                <span className='text-sm'>Expense</span>
                <span className='text-sm'> <span className='text-xl'>T</span>racker</span>
            </div>
            <div className='flex flex-row gap-4 font-deltha text-xl '>
                <Link href='/'>
                    <span className='text-sm border-r-2 border-black pr-2'>HOME</span>
                </Link>
                <Link href='/'>
                    <span className='text-sm border-r-2 border-black pr-2'>About</span>
                </Link>
                <Link href='/expense-tracker'>
                    <span className='text-sm'>Tracker</span>
                </Link>
            </div>
            {!user ?
                <div>
                    <Link href='/auth/signIn'>
                        <span className='text-sm font-deltha'>SignIn <PersonOutlineRoundedIcon /> </span>
                    </Link>
                </div>
                : <UserButton />}
        </div>
    )
}


export default navbar;
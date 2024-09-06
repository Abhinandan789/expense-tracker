'use client';

import React from 'react';
import { UserButton, useUser } from '@stackframe/stack';

const UserInfoPage = () => {
    const user = useUser({or : "redirect"});
    const loggedIn = user !== null;

    return (
        <div className='flex flex-col gap-4 m-4 text-red-600 bg-white'>

            <div className='flex flex-col p-0 m-0'>
                
                
                {loggedIn ? (
                    <div>
                        <h1 className='ml-13'>Hi,</h1>
                        <div className='flex flex-row gap-3'>
                            <UserButton />

                            <h2 className='border-l-2 p-2 font-deltha'>{user.displayName}</h2>
                        </div>
                        {/* <p className='ml-34 text-sm'>welcome back</p> */}
                        <hr className='border-t-3 border-black my-4'/>
                        
                    </div>
                ) : 
                    <div>
                        <h1>Hi</h1>
                        <div className='flex flex-row gap-3'>
                            <UserButton />
                        </div>
                    </div> }
                    <button  onClick={async () => await user.signOut()}>Sign Out</button>
                    
            </div>
        </div>
    );
};

export default UserInfoPage;

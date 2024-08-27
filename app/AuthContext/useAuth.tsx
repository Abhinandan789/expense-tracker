'use client'

import React, { useEffect,useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@stackframe/stack';
// import Loading from './loading.tsx'

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const user = useUser();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        if (!user) {
            // If the user is not logged in, redirect to the login page
            router.push('/auth/signIn');
        } else {
            setIsLoading(false);
        }
    }, [user, router]);

    if (!user) {
        // You could return a loading spinner here instead
        return null; 
    }
    if (isLoading) {
        return <div>Loading...</div>; // Or use a spinner component
    }

    return <>{children}</>;
};

export default AuthGuard;

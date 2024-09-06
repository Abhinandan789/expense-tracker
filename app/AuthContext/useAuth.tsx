'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@stackframe/stack';

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const user = useUser();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            //bakit dapat mag error?
            if (!user) {
                try {
                    router.push('/auth/signIn');
                } catch (err) {
                    setError('Navigation failed. Please try again.');
                }
            } else {
                setIsLoading(false);
            }
        }, 3000); // 3 second timeout

        return () => clearTimeout(timeout);
    }, [user, router]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!user || isLoading) {
        return <div>Loading...</div>; // Ideally, use a spinner component
    }

    return <>{children}</>;
};

export default AuthGuard;
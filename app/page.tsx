'use client'
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Home from './Home/home';

export const page = () => {
    return (
        <ChakraProvider>
            <Home />
        </ChakraProvider>
    )
}

export default page;

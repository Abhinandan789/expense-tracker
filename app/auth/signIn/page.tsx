'use client';

import React from 'react';
// import { useTheme } from 'next-themes';
import { SignIn } from '@stackframe/stack'; // Assuming you are using the built-in sign-in component

const SignInPage = () => {
  

  return (
    <div
      className={` min-h-screen flex items-center justify-center bg-white`}
    >
      <SignIn />
    </div>
  );
};

export default SignInPage;

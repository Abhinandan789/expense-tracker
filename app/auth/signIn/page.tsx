'use client';

import React from 'react';

import { SignIn } from '@stackframe/stack'; 
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

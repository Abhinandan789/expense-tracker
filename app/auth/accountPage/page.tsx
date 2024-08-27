'use Client'

import React from 'react';
import { AccountSettings } from '@stackframe/stack';

export const AccountPage = () => {
  return (
    <div
    className={`min-h-screen flex items-center justify-center bg-white`}
    >
      <AccountSettings />
    </div>
  )
}



export default AccountPage;
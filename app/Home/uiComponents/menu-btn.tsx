import React from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';

import Link from 'next/link';

export const MenuBtn = () => {
  return (
    <Menu >
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<MenuOpenIcon />}
        variant='outline'
      />
      <MenuList>
        <MenuItem className='border-b-2 border-black'>
          <Link href={'/'} passHref>
            Home
          </Link>
        </MenuItem>
        <MenuItem className='border-b-2 border-black'>
          <Link href={'/'} passHref>About</Link>
        </MenuItem>
        <MenuItem className='border-b-2 border-black'>
          <Link href={'/expense-tracker'} className='hover:cursor-pointer' passHref>Tracker</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default MenuBtn; 

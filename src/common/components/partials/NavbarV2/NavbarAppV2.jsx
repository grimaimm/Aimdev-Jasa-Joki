import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';
import { AimdevLogo } from '../../elements/Icon';
import ThemeSwitcher from '../../elements/ThemeSwitcher';
import MenuItem from './MenuItem';

const NavbarAppV2 = () => {
  return (
    <Navbar maxWidth='xl'>
      <NavbarContent className='sm:hidden' justify='start'>
        <MenuItem />
      </NavbarContent>

      <NavbarContent className='pr-3 sm:hidden' justify='center'>
        <NavbarBrand>
          <AimdevLogo />
          <p className='ml-0.5 font-aguarita text-xl tracking-wide text-inherit'>
            AimdevJT
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden gap-4 sm:flex' justify='start'>
        <NavbarBrand>
          <AimdevLogo />
          <p className='ml-0.5 font-aguarita text-xl tracking-wide text-inherit'>
            AimdevJT
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className='hidden sm:flex'>
          <MenuItem />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarAppV2;

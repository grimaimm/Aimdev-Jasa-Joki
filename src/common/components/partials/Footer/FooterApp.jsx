import React from 'react';
import { AimdevLogo } from '../../elements/Icon';
import { IoLogoWhatsapp, IoGlobe, IoMailOutline } from 'react-icons/io5';
import { CgWebsite } from 'react-icons/cg';
import { Button, Link, Tooltip } from '@heroui/react';

export default function FooterApp() {
  return (
    <div className='w-full text-default-500'>
      <footer className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-6 py-6 md:flex-row'>
        <aside className='flex items-center gap-2'>
          <AimdevLogo />
          <p>AimdevJT © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className='flex items-center justify-center'>
          <Tooltip
            key='foreground'
            className='capitalize'
            color='foreground'
            content='WhatsApp'
          >
            <Button isIconOnly aria-label='WhatsApp' variant='light'>
              <Link
                isExternal
                showAnchorIcon
                color='foreground'
                anchorIcon={<IoLogoWhatsapp size={24} />}
                href='https://wa.me/6285870655685'
                className='text-default-500 transition-all duration-300'
              />
            </Button>
          </Tooltip>
          <Tooltip
            key='foreground'
            className='capitalize'
            color='foreground'
            content='Email'
          >
            <Button isIconOnly aria-label='Email' variant='light'>
              <Link
                isExternal
                showAnchorIcon
                color='foreground'
                anchorIcon={<IoMailOutline size={24} />}
                href='mailto:aimdev.code@gmail.com'
                className='text-default-500 transition-all duration-300'
              />
            </Button>
          </Tooltip>
          <Tooltip
            key='foreground'
            className='capitalize'
            color='foreground'
            content='Portfolio'
          >
            <Button isIconOnly aria-label='Portfolio' variant='light'>
              <Link
                isExternal
                showAnchorIcon
                color='foreground'
                anchorIcon={<CgWebsite size={24} />}
                href='https://aimdev.xyz'
                className='text-default-500 transition-all duration-300'
              />
            </Button>
          </Tooltip>
        </nav>
      </footer>
    </div>
  );
}

import React from 'react';
import { AimdevLogo } from '../../elements/Icon';
import { dataSosmed } from '@/common/lib/DummyData';
import Sosmed from './Sosmed';

const FooterApp = () => {
  return (
    <div className='w-full text-default-500'>
      <footer className='mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-between px-4 py-4 text-sm md:flex-row md:text-base'>
        <aside className='flex items-center gap-2'>
          <AimdevLogo />
          <p>AimdevJT © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className='flex items-center justify-center'>
          {dataSosmed.map((item) => (
            <Sosmed key={item.id} {...item} />
          ))}
        </nav>
      </footer>
    </div>
  );
};

export default FooterApp;

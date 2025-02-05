import React from 'react';
import { ContainerLayout } from '../elements/Container';
import FooterApp from '../partials/Footer/FooterApp';
import NavbarAppV2 from '../partials/NavbarV2/NavbarAppV2';

const AppLayout = ({ children }) => {
  return (
    <ContainerLayout>
      <div className='absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_100%)] dark:bg-[linear-gradient(to_right,#80808025_1px,transparent_1px),linear-gradient(to_bottom,#80808025_1px,transparent_1px)]'></div>
      <NavbarAppV2 />
      {children}
      <FooterApp />
    </ContainerLayout>
  );
};

export default AppLayout;

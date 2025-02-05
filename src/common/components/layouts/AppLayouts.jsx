import { ContainerLayout } from '../elements/Container';
import FooterApp from '../partials/Footer/FooterApp';
import NavbarApp from '../partials/Navbar/NavbarApp';
import NavbarAppV2 from '../partials/NavbarV2/NavbarAppV2';

export const AppLayouts = ({ children }) => {
  return (
    <ContainerLayout>
      {/* <div className='absolute inset-0 -z-10 h-full w-full dark:bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_80%,transparent_100%)]'></div> */}
      <div className='absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_100%)] dark:bg-[linear-gradient(to_right,#80808025_1px,transparent_1px),linear-gradient(to_bottom,#80808025_1px,transparent_1px)]'></div>
      {/* <div
        aria-hidden="true"
        className="fixed block dark:opacity-100 md:-bottom-[30%] -bottom-[20%] -left-[30%] z-0"
      >
        <img
          src="/gradients/docs-left.svg"
          className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
          alt="docs left background"
          data-loaded="true"
        />
      </div> */}
      <NavbarAppV2 />
      {children}
      <FooterApp />
      {/* <div
        aria-hidden="true"
        className="fixed block dark:opacity-70 md:-top-[50%] md:-right-[60%] -bottom-[70%] -right-[100%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12"
      >
        <img
          src="/gradients/docs-right.svg"
          className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
          alt="docs right background"
          data-loaded="true"
        />
      </div> */}
    </ContainerLayout>
  );
};

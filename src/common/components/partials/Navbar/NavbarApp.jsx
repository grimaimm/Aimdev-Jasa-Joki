import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarContent,
  NavbarItem,
} from '@heroui/react';
import ThemeSwitcher from '../../elements/ThemeSwitcher';
import { MENU_ITEMS } from '@/common/lib/Menu';
import { useRouter } from 'next/router';
import { AimdevLogo } from '../../elements/Icon';
import { MenuItemDesktop, MenuItemMobile } from './MenuItem';

export default function NavbarApp() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentSection, setCurrentSection] = React.useState('');

  // Fungsi scroll ke section
  const handleScrollToSection = (href) => {
    if (href.startsWith('#')) {
      const sectionId = href.substring(1);

      if (router.pathname !== '/') {
        router.push('/').then(() => {
          const sectionElement = document.getElementById(sectionId);
          if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
          }
        });
      } else {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  // Fungsi untuk mendapatkan section saat ini
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = MENU_ITEMS.filter((item) =>
        item.href.startsWith('#'),
      ).map((item) => item.href.substring(1));

      let current = '';
      sections.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = `#${sectionId}`;
          }
        }
      });
      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      // isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth='xl'
      classNames={{
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[3px]',
          'data-[active=true]:after:rounded-[5px]',
          'data-[active=true]:after:bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-400 dark:to-cyan-400',
        ],
      }}
    >
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle
          className='border-none ring-0'
          onChange={setIsMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
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

      <NavbarContent className='hidden gap-6 sm:flex' justify='center'>
        <MenuItemDesktop
          router={router}
          handleScrollToSection={handleScrollToSection}
          currentSection={currentSection}
        />
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <MenuItemMobile
        router={router}
        handleScrollToSection={handleScrollToSection}
        currentSection={currentSection}
        setIsMenuOpen={setIsMenuOpen}
      />
    </Navbar>
  );
}

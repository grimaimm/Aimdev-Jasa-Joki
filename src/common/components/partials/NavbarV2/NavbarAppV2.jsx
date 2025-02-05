import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from '@heroui/react';
import { AimdevLogo } from '../../elements/Icon';
import { HiOutlineBars2 as BarsIcon } from 'react-icons/hi2';
import ThemeSwitcher from '../../elements/ThemeSwitcher';

export default function NavbarAppV2() {
  const dropdownItems = [
    { key: 'Introduction', label: 'Introduction', sectionId: 'introduction' },
    {
      key: 'Why Choose Us',
      label: 'Why Choose Us',
      sectionId: 'why-choose-us',
    },
    { key: 'App Types', label: 'App Types', sectionId: 'app-types' },
    { key: 'Tech We Use', label: 'Tech We Use', sectionId: 'tech-we-use' },
    {
      key: 'Pricing Plans',
      label: 'Pricing Plans',
      sectionId: 'pricing-plans',
    },
    { key: 'FAQ', label: 'FAQ', sectionId: 'asked-questions' },
    { key: 'Contact Us', label: 'Contact Us', sectionId: 'cta' },
  ];

  // Fungsi untuk scroll ke section
  const handleScroll = (sectionId) => {
    // const section = document.getElementById(sectionId);
    // if (section) {
    //   section.scrollIntoView({ behavior: "smooth", top: 20, });
    // }

    const section = document.getElementById(sectionId);
    if (!section) return;
    window.scroll({
      top: section.offsetTop - 24,
      behavior: 'smooth',
    });
  };

  return (
    <Navbar maxWidth='xl'>
      <NavbarContent className='sm:hidden' justify='start'>
        <Dropdown
          classNames={{
            base: 'p-3',
            content:
              'py-2 px-2 border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900',
          }}
        >
          <DropdownTrigger>
            <button className='flex items-center border-none fill-none stroke-none text-default-500 outline-none transition-all duration-300'>
              <BarsIcon size={30} />
            </button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label='Static Actions'
            variant='faded'
            // className="bg-red-500"
          >
            <DropdownSection title='Actions'>
              {dropdownItems.map((item) => (
                <DropdownItem
                  key={item.key}
                  onClick={() => handleScroll(item.sectionId)}
                >
                  {item.label}
                </DropdownItem>
              ))}
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
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
          <Dropdown
            classNames={{
              base: 'p-3',
              content:
                'py-2 px-2 border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900',
            }}
          >
            <DropdownTrigger>
              <button className='flex items-center border-none fill-none stroke-none text-default-500 outline-none transition-all duration-300'>
                <BarsIcon size={30} />
              </button>
            </DropdownTrigger>
            <DropdownMenu aria-label='Static Actions' variant='faded'>
              <DropdownSection title='Actions'>
                {dropdownItems.map((item) => (
                  <DropdownItem
                    key={item.key}
                    onPress={() => handleScroll(item.sectionId)}
                  >
                    {item.label}
                  </DropdownItem>
                ))}
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

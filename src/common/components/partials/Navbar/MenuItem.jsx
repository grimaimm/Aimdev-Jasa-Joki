import { MENU_ITEMS } from '@/common/lib/Menu';
import {
  Accordion,
  AccordionItem,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { ChevronDown } from '../../elements/Icon';

export function MenuItemDesktop({
  router,
  handleScrollToSection,
  currentSection,
}) {
  return (
    <>
      {MENU_ITEMS.map(
        (item, index) =>
          item.isShow &&
          item.isNavbar && (
            <NavbarItem
              key={index}
              isActive={
                item.href === currentSection || item.href === router.pathname
              }
            >
              <Link
                aria-current='page'
                href={item.href}
                className={`${item.href === currentSection || item.href === router.pathname ? 'text-teal-500 dark:text-teal-400' : 'text-default-500'}`}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    handleScrollToSection(item.href);
                  }
                }}
              >
                {item.title}
              </Link>
            </NavbarItem>
          ),
      )}
      <Dropdown>
        <NavbarItem>
          <DropdownTrigger>
            <Button
              disableRipple
              className='!border-none bg-transparent p-0 text-medium text-default-500 data-[hover=true]:bg-transparent'
              radius='sm'
              endContent={<ChevronDown fill='currentColor' size={16} />}
              variant='light'
            >
              Sections
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu
          aria-label='About Us Sections'
          itemClasses={{ base: 'gap-4' }}
        >
          {MENU_ITEMS.map(
            (item, index) =>
              item.isShow &&
              item.isSection && (
                <DropdownItem
                  key={index}
                  isActive={item.href === currentSection}
                  onPress={() => {
                    if (item.href.startsWith('#')) {
                      handleScrollToSection(item.href);
                    }
                  }}
                >
                  {item.title}
                </DropdownItem>
              ),
          )}
        </DropdownMenu>
      </Dropdown>
    </>
  );
}

export function MenuItemMobile({
  router,
  handleScrollToSection,
  currentSection,
  setIsMenuOpen,
}) {
  return (
    <NavbarMenu>
      {MENU_ITEMS.map(
        (item, index) =>
          item.isShow &&
          item.isNavbar && (
            <NavbarMenuItem
              key={index}
              isActive={
                item.href === currentSection || item.href === router.pathname
              }
            >
              <Link
                aria-current='page'
                href={item.href}
                size='lg'
                className={`${item.href === currentSection || item.href === router.pathname ? 'text-teal-500 dark:text-teal-400' : 'text-default-500'}`}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    handleScrollToSection(item.href);
                  }
                  setIsMenuOpen(false);
                }}
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ),
      )}
      <NavbarMenuItem>
        <Accordion
          defaultExpandedKeys={['1']}
          itemClasses={{
            base: '-mx-2',
            trigger: 'py-[4px] w-fit',
            title: 'text-lg text-default-500',
          }}
        >
          <AccordionItem key='1' aria-label='Sections' title='Sections'>
            <ul className='ml-8 list-disc space-y-2 text-default-500'>
              {MENU_ITEMS.filter((item) => item.isShow && item.isSection).map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      aria-current='page'
                      href={item.href}
                      size='lg'
                      // className={`${item.href === currentSection || item.href === router.pathname ? "text-teal-500 dark:text-teal-400" : "text-default-500"}`}
                      onClick={(e) => {
                        if (item.href.startsWith('#')) {
                          e.preventDefault();
                          handleScrollToSection(item.href);
                        }
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.title}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </AccordionItem>
        </Accordion>
      </NavbarMenuItem>
    </NavbarMenu>
  );
}

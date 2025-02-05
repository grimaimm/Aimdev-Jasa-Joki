import React from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@heroui/react';
import { SECTION_MENU } from '@/common/lib/Menu';
import { HiOutlineBars2 as BarsIcon } from 'react-icons/hi2';

const MenuItem = () => {
  // Fungsi untuk scroll ke section
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    window.scroll({
      top: section.offsetTop - 24,
      behavior: 'smooth',
    });
  };

  return (
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
          {SECTION_MENU.map((item) => (
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
  );
};

export default MenuItem;

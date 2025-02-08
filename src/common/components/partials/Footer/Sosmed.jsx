import React from 'react';
import { Button, Link, Tooltip } from '@heroui/react';

const Sosmed = ({ name, icon, link }) => {
  return (
    <Tooltip
      key={name}
      className='border border-teal-300 bg-gradient-to-tr from-teal-400/20 to-cyan-400/20 capitalize text-teal-500 dark:border-teal-600 dark:from-teal-600/20 dark:to-cyan-600/20 dark:text-teal-400'
      // color='foreground'
      content={name}
    >
      <Button isIconOnly aria-label={name} variant='light'>
        <Link
          isExternal
          showAnchorIcon
          color='foreground'
          anchorIcon={icon}
          href={link}
          className='text-default-500 transition-all duration-300'
        />
      </Button>
    </Tooltip>
  );
};

export default Sosmed;

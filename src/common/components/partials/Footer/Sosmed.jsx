import React from 'react';
import { Button, Link, Tooltip } from '@heroui/react';

const Sosmed = ({ name, icon, link }) => {
  return (
    <Tooltip
      key={name}
      className='capitalize'
      color='foreground'
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

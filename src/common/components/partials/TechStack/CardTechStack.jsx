import { Card, CardBody } from '@heroui/react';
import * as React from 'react';

const CardTechStack = ({ name, icon }) => {
  return (
    <div className='px-2'>
      <Card
        isBlurred
        className='w-full rounded-full border border-transparent bg-white dark:border-zinc-800 dark:bg-zinc-900/80'
        shadow='sm'
      >
        <CardBody className='py-2'>
          <div className='flex items-center gap-2'>
            <div className='h-6 w-6'>{icon}</div>
            <div className='whitespace-nowrap'>{name}</div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardTechStack;

import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from '@heroui/react';

export default function ListCardWhyUs({ item }) {
  return (
    <Card
      key={item.id}
      isBlurred
      className='w-full border border-transparent bg-white dark:border-zinc-800 dark:bg-zinc-900/80'
      // className="border-none bg-background/60 dark:bg-default-100/50"
      // shadow="sm"
    >
      <CardBody className='flex flex-row gap-3'>
        <div
          className={`flex h-fit items-center rounded-full border p-3 ${
            [1, 3, 5].includes(item.id)
              ? 'border border-teal-400 bg-gradient-to-tr from-teal-400/30 to-cyan-400/30 dark:border-teal-600 dark:from-teal-600/30 dark:to-cyan-600/30'
              : 'border border-zinc-400 bg-gradient-to-tr from-zinc-400/30 to-zinc-400/30 dark:border-zinc-600 dark:from-zinc-600/30 dark:to-zinc-600/30'
          }`}
        >
          {item.icon}
        </div>
        <div className='flex flex-col'>
          <span className='font-aguarita text-default-300'>0{item.id}</span>
          <p className='text-md mb-1 font-semibold'>{item.title}</p>
          <p className='text-small text-default-500'>{item.desc}</p>
        </div>
      </CardBody>
    </Card>
  );
}

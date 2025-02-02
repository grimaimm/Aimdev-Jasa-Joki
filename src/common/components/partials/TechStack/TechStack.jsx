import * as React from 'react';
import AutoScrollTechStack from './AutoScrollTechStack';
import CardTechStack from './CardTechStack';
import { TECH_STACKS } from './Stack';
import { ScrollShadow } from '@heroui/react';

const TechStack = () => {
  const stackInArray = Object.entries(TECH_STACKS).sort(
    () => Math.random() - 0.5,
  );
  return (
    <section className='space-y-2'>
      <div className='scroller flex flex-col overflow-x-hidden'>
        {Array.from({ length: 3 }, (_, index) => {
          const slider = [...stackInArray].sort(() => Math.random() - 0.5);
          return (
            <AutoScrollTechStack
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              {slider.map(([name, icon], index) => (
                <CardTechStack key={index} name={name} icon={icon} />
              ))}
            </AutoScrollTechStack>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;

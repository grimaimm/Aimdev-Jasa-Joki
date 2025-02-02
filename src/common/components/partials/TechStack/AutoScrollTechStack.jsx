import * as React from 'react';
import Marquee from 'react-fast-marquee';

const AutoScrollTechStack = ({
  children,
  direction = 'left',
  withPadding = true,
}) => {
  return (
    <Marquee
      direction={direction}
      speed={40}
      className={withPadding ? 'py-3.5' : ''}
    >
      {children}
    </Marquee>
  );
};

export default AutoScrollTechStack;

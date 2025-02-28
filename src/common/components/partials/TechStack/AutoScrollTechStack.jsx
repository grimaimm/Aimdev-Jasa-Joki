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
      speed={20}
      className={withPadding ? 'py-2' : ''}
    >
      {children}
    </Marquee>
  );
};

export default AutoScrollTechStack;

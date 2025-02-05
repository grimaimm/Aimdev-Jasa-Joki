import React from 'react';

export const ContainerLayout = ({ children, className = '', ...others }) => {
  return (
    <div className={className} {...others}>
      {children}
    </div>
  );
};

export const ContainerContent = ({
  children,
  className = '',
  background = '',
  ...others
}) => {
  return (
    <div className={background}>
      <main className={className} {...others}>
        {children}
      </main>
    </div>
  );
};

export const SectionContent = ({
  children,
  className = '',
  background = '',
  ...others
}) => {
  return (
    <div className={background}>
      <section className={className} {...others}>
        {children}
      </section>
    </div>
  );
};

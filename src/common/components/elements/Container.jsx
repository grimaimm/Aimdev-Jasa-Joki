export const ContainerLayout = ({ children, className = '', ...others }) => {
  return (
    <div className={`${className}`} {...others}>
      {children}
    </div>
  );
};

export const ContainerContent = ({
  children,
  background = '',
  className = '',
  ...others
}) => {
  return (
    <div className={`${background}`}>
      <main className={`${className}`} {...others}>
        {children}
      </main>
    </div>
  );
};

export const SectionContent = ({
  children,
  background = '',
  className = '',
  ...others
}) => {
  return (
    <div className={`${background}`}>
      <section className={`${className}`} {...others}>
        {children}
      </section>
    </div>
  );
};

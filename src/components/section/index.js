import classnames from 'classnames';

const Section = ({ id, title, children }) => {
  const sectionClasses = classnames({
    section: true,
    [`section--${id}`]: !!id
  });

  return (
    <section className={sectionClasses} role="region" aria-labelledby={id}>
      {title && (
        <h2 id={id} className="section__title" role="heading" aria-level="2">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default Section;

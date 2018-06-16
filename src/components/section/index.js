import classnames from 'classnames';

import './section.scss';

const Section = ({ id, title, children }) => {
  const sectionClasses = classnames({
    section: true,
    [`section--${id}`]: !!id
  });

  const wrapperClasses = classnames({
    section__wrapper: true,
    'special-box-border': true
  });

  return (
    <section className={sectionClasses} role="region" aria-labelledby={id}>
      {title && (
        <h2 id={id} className="section__title" role="heading" aria-level="2">
          {title}
        </h2>
      )}
      <div className={wrapperClasses}>{children}</div>
    </section>
  );
};

export default Section;

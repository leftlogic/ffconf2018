import classnames from 'classnames';

import './divider.scss';

import svg from 'raw-loader!./divider.svg';

const Divider = ({ className, cssModifier }) => {
  const wrapperClasses = classnames({
    divider: true,
    [`divider--${cssModifier}`]: cssModifier,
    [className]: className,
  });
<<<<<<< HEAD
  return <div className={wrapperClasses} aria-hidden="true" />;
=======
  return (
    <div
      className={wrapperClasses}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: `${svg}` }}
    />
  );
>>>>>>> 4fb922a2d726325c3480d93c28b75b4048668d26
};

export default Divider;

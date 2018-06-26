import classnames from 'classnames';

import './divider.scss';

import svg from 'raw-loader!./divider.svg';

const Divider = ({ className, cssModifier }) => {
  const wrapperClasses = classnames({
    divider: true,
    [`divider--${cssModifier}`]: cssModifier,
    [className]: className
  });
  return (
    <div
      className={wrapperClasses}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: `${svg}` }}
    />
  );
};

export default Divider;

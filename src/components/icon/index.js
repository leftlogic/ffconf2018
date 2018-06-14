import classnames from 'classnames';

const Icon = ({ icon, className }) => {
  const svgClasses = classnames({
    icon: true,
    [`icon--${icon}`]: !!icon,
    [className]: !!className
  });

  return (
    <svg aria-hidden="true" className={svgClasses}>
      svg {icon}
    </svg>
  );
};

export default Icon;

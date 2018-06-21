import classnames from 'classnames';

import './divider.scss';

const svg =
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1106 2"><defs><path id="a" d="M0 0h1112v2H0V0z"/><mask id="b" width="1112" height="2" x="0" y="0" fill="#fff"><use xlink:href="#a"/></mask></defs><use fill="none" fill-rule="evenodd" stroke="currentColor" stroke-dasharray="2 22" stroke-width="4" mask="url(#b)" transform="matrix(1 0 0 -1 0 2)" xlink:href="#a"/></svg>';

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
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default Divider;

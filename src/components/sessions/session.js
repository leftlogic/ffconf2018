import classnames from 'classnames';

import Divider from '../divider';

const Session = ({ date1, date2, slug, type, children }) => {
  const wrapperClasses = classnames({
    sessions__item: true,
    [`sessions__item--${type}`]: type,
    'js-session': true
  });

  return (
    <li
      className={wrapperClasses}
      id={slug}
      data-date1={date1}
      data-date2={date2}
    >
      {children}
      <Divider cssModifier="sessions" />
    </li>
  );
};

export default Session;

import Session from './session';
import Icon from '../icon';

import config from '../../config';

const { phase } = config.config;

const Break = ({ title, icon, start, end, date1, date2, slug }) => {
  if (phase !== 3) {
    return null;
  }

  return (
    <Session date1={date1} date2={date2} slug={slug}>
      <header className="break">
        <h3 className="break__title" role="heading" aria-level="3">
          {icon && <Icon icon={icon} />}
          {title}
        </h3>
        <div className="break__time">
          {start} &mdash; {end}
        </div>
      </header>
    </Session>
  );
};

export default Break;

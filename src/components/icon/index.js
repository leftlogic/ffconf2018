import classnames from 'classnames';

import badge from 'raw-loader!./badge.svg';
import language from 'raw-loader!./language.svg';
import donut from 'raw-loader!./donut.svg';
import party from 'raw-loader!./party.svg';
import quotes from 'raw-loader!./quotes.svg';

const data = { badge, language, donut, party, quotes };

const Icon = ({ icon, className }) => {
  const svgClasses = classnames({
    icon: true,
    [`icon--${icon}`]: !!icon,
    [className]: !!className
  });

  return (
    <div
      aria-hidden="true"
      className={svgClasses}
      dangerouslySetInnerHTML={{ __html: `${data[icon]}` }}
    />
  );
};

export default Icon;

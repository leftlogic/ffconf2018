import classnames from 'classnames';

import config from '../../config';

const { ticketUrl } = config;
const { phase, soldout } = config.config;

const Tickets = ({ className, namespace }) => {
  let buy = false;
  let buttonText = '';

  if (phase < 1) {
    // TODO: on sale text
    buttonText = 'On sale 20 July';
  } else if (phase >= 1 && phase <= 3) {
    if (soldout.conference) {
      buttonText = 'Sold Out';
    } else {
      buy = true;
      buttonText = 'Tickets';
    }
  }

  if (!buttonText) {
    return null;
  }

  const buttonClasses = classnames({
    tickets: true,
    'tickets--enabled': buy,
    'tickets--disabled': !buy,
    [namespace]: namespace,
    [`${namespace}--enabled`]: namespace && buy,
    [`${namespace}--disabled`]: namespace && !buy,
    [className]: !!className
  });

  const textClasses = classnames({
    tickets__text: true,
    [`${namespace}__text`]: namespace
  });

  if (buy) {
    return (
      <a
        href={ticketUrl}
        target="_blank"
        rel="noopener"
        className={buttonClasses}
      >
        <strong className={textClasses}>{buttonText}</strong>
      </a>
    );
  }

  return (
    <span className={buttonClasses}>
      <strong className={textClasses}>{buttonText}</strong>
    </span>
  );
};

export default Tickets;

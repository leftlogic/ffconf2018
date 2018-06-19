import classnames from 'classnames';

import config from '../../config';
import data from './data';

import './sponsors.scss';

const { sponsorUrl, sponsorAvailable } = config;

const SponsorsAvailable = () => {
  if (!sponsorAvailable) {
    return null;
  }

  return (
    <section className="sponsors__category sponsors__category--available">
      <h3 className="sponsors__title" role="heading" aria-level="3">
        Become a sponsor
      </h3>
      <a
        className="sponsors__link sponsors__link--available button"
        href={sponsorUrl}
        target="_blank"
        rel="noopener"
      >
        See our sponsorship pack &amp; get in touch today
      </a>
    </section>
  );
};

const Sponsors = () => {
  return (
    <div className="sponsors" id="sponsors">
      {data.map(cat => (
        <section
          key={cat.slug}
          className={classnames({
            sponsors__category: true,
            [`sponsors__category--${cat.slug}`]: !!cat.slug
          })}
        >
          <h3 className="sponsors__title" role="heading" aria-level="3">
            {cat.title} sponsors
          </h3>
          <div className="sponsors__list">
            {cat.list.map(sponsor => (
              <figure
                key={sponsor.name}
                className={classnames({
                  sponsors__item: true,
                  [`sponsors__item--${cat.slug}`]: !!cat.slug
                })}
              >
                <a
                  className="sponsors__link sponsors__link--image"
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener"
                  title={sponsor.name}
                >
                  <img
                    className="sponsors__image"
                    src={`/static/images/sponsors/${sponsor.img}`}
                    alt={sponsor.name}
                  />
                </a>
              </figure>
            ))}
          </div>
        </section>
      ))}

      <SponsorsAvailable />
    </div>
  );
};

export default Sponsors;

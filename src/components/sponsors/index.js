import { Fragment } from 'react';

import Section from '../section';

import config from '../../config';
import data from './data';

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
        className="sponsors__link sponsors__link--available"
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
    <Section id="sponsors" title="Sponsors">
      {data.map(cat => (
        <section key={cat.slug} className="sponsors__category">
          <h3 className="sponsors__title" role="heading" aria-level="3">
            {cat.title} sponsors
          </h3>
          <div className="sponsors__list">
            {cat.list.map(sponsor => (
              <figure key={sponsor.name} className="sponsors__item">
                <a
                  className="sponsors__link"
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
    </Section>
  );
};

export default Sponsors;

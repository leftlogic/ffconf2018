import { Fragment } from 'react';
import Link from 'next/link';

import data from './data';

const Workshops = () => (
  <Fragment>
    {data.map(item => (
      <section
        key={item.slug}
        id={item.slug}
        className="workshop-wrapper workshop-summary"
      >
        <header className="workshop-header">
          <div className="workshop-header-content">
            <h3 className="workshop-title" role="heading" aria-level="3">
              {item.title}
            </h3>
            <div className="workshop-details">
              <a
                className="workshop-speaker-name"
                target="_blank"
                href={`https://twitter.com/${item.speaker.twitter}`}
              >
                {item.speaker.name}
              </a>
            </div>
            <div>
              <Link
                href={`/workshop?slug=${item.slug}`}
                as={`/workshop/${item.slug}`}
              >
                <a className="button">More Info</a>
              </Link>
            </div>
          </div>
          <div className="workshop-header-image-wrapper">
            <div className="workshop-header-image" />
          </div>
        </header>
      </section>
    ))}
  </Fragment>
);

export default Workshops;

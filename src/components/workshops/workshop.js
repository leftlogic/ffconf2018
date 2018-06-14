import { Fragment } from 'react';

import Markdown from '../markdown';
import Section from '../section';

import config from '../../config';
import data from './data';

const { phase } = config.config;

const WorkshopTopic = ({ title, description }) => {
  return (
    <li className="workshop__topic">
      <h4 className="workshop__topic-title" role="heading" aria-level="4">
        {title}
      </h4>
      {description}
    </li>
  );
};

const WorkshopDetails = ({ twitter, name, date, time }) => {
  return (
    <div className="workshop__details">
      <a
        className="workshop__speaker"
        target="_blank"
        rel="noopener"
        href={`https://twitter.com/${twitter}`}
      >
        {name}
      </a>
      <div className="workshop__date">{date}</div>
      <div className="workshop__time">{time}</div>
    </div>
  );
};

const WorkshopImage = ({ photo }) => {
  return (
    <div
      className="workshop__image"
      style={{
        '--workshop-photo-1x': `url(/static/images/workshops/1x-${photo})`,
        '--workshop-photo-2x': `url(/static/images/workshops/2x-${photo})`
      }}
    />
  );
};

const WorkshopTopics = ({ topics = [] }) => {
  if (!topics.length) {
    return null;
  }

  return (
    <Fragment>
      <h2 className="workshop__topics-title">What you'll learn on the day</h2>
      <ul className="workshop__topics-list">
        {topics.map((topic, index) => (
          <WorkshopTopic key={`workshop-topics-${index}`} {...topic} />
        ))}
      </ul>
    </Fragment>
  );
};

const WorkshopDescription = ({ description, extendedDescription }) => {
  return (
    <Fragment>
      <h2>Detailed description</h2>
      <Markdown className="workshop__description">{description}</Markdown>
      <Markdown className="workshop__extended-description">
        {extendedDescription}
      </Markdown>
    </Fragment>
  );
};

const WorkshopBuy = ({ slug, url }) => {
  const soldout = config.config.soldout[slug];

  if (phase > 3) {
    return null;
  }

  if (phase < 1) {
    // TODO: proper text
    return <span className="button">On sale 20 July</span>;
  }

  if (soldout) {
    return <span className="button">Sold Out</span>;
  }

  return (
    <a href={url} target="_blank" rel="noopener" className="button">
      Buy tickets
    </a>
  );
};

const Workshop = ({ selectedSlug }) => {
  const item = data.reduce((acc, currentItem) => {
    if (currentItem.slug === selectedSlug) {
      acc = currentItem;
    }

    return acc;
  }, null);

  if (!item) {
    return null;
  }

  const {
    slug,
    title,
    speaker,
    details,
    ticket,
    topics,
    description,
    extendedDescription
  } = item;
  const { name, twitter, photo } = speaker;
  const { date, time } = details;
  const { url } = ticket;

  return (
    <Section id="workshop">
      <header className="workshop__header">
        <div className="workshop__header-content">
          <h3 className="workshop__title" role="heading" aria-level="3">
            {title}
          </h3>

          <WorkshopDetails
            twitter={twitter}
            name={name}
            date={date}
            time={time}
          />
        </div>

        <WorkshopImage photo={photo} />
      </header>

      <div className="workshop__content">
        <WorkshopTopics topics={topics} />
        <WorkshopDescription
          description={description}
          extendedDescription={extendedDescription}
        />
      </div>

      <WorkshopBuy slug={slug} url={url} />
    </Section>
  );
};

export default Workshop;

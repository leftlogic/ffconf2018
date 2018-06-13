import Section from '../section';

import data from './data';

const Location = ({ location }) => {
  const { url, name, detail, extra } = location;

  return (
    <div className="location">
      <a
        className="name url org fn location__link"
        href={url}
        target="_blank"
        rel="noopener"
      >
        {name}
      </a>
      <div className="location__description">
        <p className="location__detail">{detail}</p>
        {extra && <p className="location__extra">{extra}</p>}
      </div>
    </div>
  );
};

const Locations = () => (
  <Section id="locations" title="Locations">
    <ul className="locations">
      {data.map(item => (
        <li key={item.type} className="locations__category">
          <h3 className="locations__title" role="heading" aria-level="3">
            {item.type}
          </h3>
          <ul className="locations__list">
            {item.location.map(location => (
              <li key={location.name} className="vcard locations__item">
                <Location location={location} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </Section>
);

export default Locations;

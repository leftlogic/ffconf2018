import data from './data';

const WorkshopDetails = ({ selectedSlug }) => {
  const item = data.reduce((acc, currentItem) => {
    if (currentItem.slug === selectedSlug) {
      acc = currentItem;
    }

    return acc;
  }, null);

  if (!item) {
    return null;
  }

  const { slug, title, speaker, details } = item;
  const { name, twitter } = speaker;
  const { date, time } = details;

  return (
    <section className="workshop-wrapper workshop-full" id={slug}>
      <header className="workshop-header">
        <div className="workshop-header-content">
          <h3 className="workshop-title" role="heading" aria-level="3">
            {title}
          </h3>
          <div className="workshop-details">
            <a
              className="workshop-speaker-name"
              target="_blank"
              href={`https://twitter.com/${twitter}`}
            >
              {name}
            </a>
            <div className="workshop-date">{date}</div>
            <div className="workshop-time">{time}</div>
          </div>
        </div>

        <div className="workshop-header-image-wrapper">
          <div className="workshop-header-image" />
        </div>
      </header>
    </section>
  );
};

export default WorkshopDetails;

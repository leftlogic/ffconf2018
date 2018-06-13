import config from '../../config';

const start = 2009;

let data = [];
for (let i = start; i < config.year; i++) {
  data.push(i);
}

const PreviousYears = () => {
  return (
    <nav className="previous-years">
      <h5 className="previous-years__title">Previous years:</h5>
      <ul className="previous-years__list">
        {data.map(item => (
          <li key={item} className="previous-years__item">
            <a
              className="previous-years__link"
              href={`https://${item}.ffconf.org/`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PreviousYears;

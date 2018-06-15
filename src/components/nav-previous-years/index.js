import config from '../../config';

import './nav-previous-years.scss';

const start = 2009;

let data = [];
for (let i = start; i < config.year; i++) {
  data.push(i);
}

const NavPreviousYears = () => {
  return (
    <nav className="nav-previous-years">
      <div className="nav-previous-years__title">Previous years:</div>
      <ul className="nav-previous-years__list">
        {data.map(item => (
          <li key={item} className="nav-previous-years__item">
            <a
              className="nav-previous-years__link"
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

export default NavPreviousYears;

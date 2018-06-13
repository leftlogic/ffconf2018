import Link from 'next/link';
import { withRouter } from 'next/router';
import classnames from 'classnames';

const Nav = ({ router, data, className }) => {
  return (
    <nav className={className}>
      <ul className={`${className}__list`}>
        {data.map(item => (
          <li key={item.title} className={`${className}__item`}>
            <Link href={item.url}>
              <a
                className={classnames({
                  [`${className}__link`]: true,
                  [`${className}__link--selected`]: router.pathname === item.url
                })}
                target={item.url.indexOf('http') === 0 ? '_blank' : null}
                rel={item.url.indexOf('http') === 0 ? 'noopener' : null}
              >
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default withRouter(Nav);

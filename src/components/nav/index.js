import Link from 'next/link';
import { withRouter } from 'next/router';
import classnames from 'classnames';

const NavItem = ({ className, title, url, pathname }) => {
  return (
    <li className={`${className}__item`}>
      <Link href={url}>
        <a
          className={classnames({
            [`${className}__link`]: true,
            [`${className}__link--selected`]: pathname === url
          })}
          target={url.indexOf('http') === 0 ? '_blank' : null}
          rel={url.indexOf('http') === 0 ? 'noopener' : null}
        >
          {title}
        </a>
      </Link>
    </li>
  );
};

const Nav = ({ router, data, className }) => {
  const { pathname } = router;

  return (
    <ul className={`${className}__list`}>
      {data.map(item => (
        <NavItem
          key={item.title}
          className={className}
          {...item}
          pathname={pathname}
        />
      ))}
    </ul>
  );
};

export default withRouter(Nav);

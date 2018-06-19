import Nav from '../nav';

import data from './data';

import './nav-full.scss';

const NavFull = () => {
  return (
    <nav className="nav-full">
      <Nav data={data} className="nav-full" />
    </nav>
  );
};

export default NavFull;

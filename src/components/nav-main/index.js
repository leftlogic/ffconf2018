import Nav from '../nav';
import Tickets from '../tickets';

import data from './data';

import './nav-main.scss';

const NavMain = () => {
  return (
    <Nav data={data} className="nav-main">
      <div>
        <Tickets namespace="nav-main-buy" />
      </div>
    </Nav>
  );
};

export default NavMain;

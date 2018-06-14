import { Fragment } from 'react';

import Header from '../header';
import Footer from '../footer';
import Sponsors from '../sponsors';

const Layout = ({ children }) => (
  <Fragment>
    <Header />

    {children}

    <Sponsors />
    <Footer />
  </Fragment>
);

export default Layout;

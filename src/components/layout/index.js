import { Fragment } from 'react';

import Header from '../header';
import Footer from '../footer';
import Sponsors from '../sponsors';
import Quote from '../quote';
import QuotesTemplates from '../quotes-templates';

import './layout.scss';

const Layout = ({ children }) => (
  <Fragment>
    <div className="gradient">
      <Header />

      {children}

      <Quote />
      <Sponsors />
    </div>
    <Footer />
    <QuotesTemplates />
  </Fragment>
);

export default Layout;

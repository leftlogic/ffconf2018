import { Fragment } from 'react';

import Header from '../header';
import Footer from '../footer';
import Sponsors from '../sponsors';
import Quote from '../quote';
import QuotesTemplates from '../quote/quotes-templates';

import './layout.scss';

const Layout = ({ children }) => (
  <Fragment>
    <div className="gradient">
      <div className="clouds" />
      <div className="wrapper">
        <main className="main">
          <Header />
          {children}

          <Quote />

          <Sponsors />
        </main>

        <div className="duke-of-yorks">
          <div className="curtains" />
        </div>
        <Footer />

        <QuotesTemplates />
      </div>
    </div>
  </Fragment>
);

export default Layout;

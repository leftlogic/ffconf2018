import Link from 'next/link';
import moment from 'moment';

import FullNav from '../full-nav';
import PreviousYears from '../previous-years';

import config from '../../config';

const when = `${config.date1.format('D')} & ${config.date2.format('D-MMM')}`;

const Footer = () => {
  return (
    <footer>
      <h4 className="footer-title">Additional Links</h4>

      <FullNav />

      <h4 className="footer-title">Footnote</h4>

      <p className="blurb">
        <Link href="/">
          <a>#ffconf</a>
        </Link>{' '}
        is run twice on both {when}, in Brighton, UK. Organised by Left Logic, a
        small Brighton (UK) based development company, specialising in Node
        based applications and bleeding edge front end technology.
      </p>

      <p className="codeofconduct">
        By attending any of our events (workshops & conference & fringe events)
        you are agreeing to our{' '}
        <Link href="/code-of-conduct">
          <a>code of conduct</a>
        </Link>.
      </p>

      <p className="curators">
        Curated and created with much love, tears and sweat by{' '}
        <a href="https://twitter.com/rem" target="_blank">
          Remy
        </a>{' '}
        &{' '}
        <a href="https://twitter.com/Julieanne" target="_blank">
          Julie
        </a>{' '}
        of{' '}
        <a href="http://leftlogic.com" target="_blank">
          Left&nbsp;Logic
        </a>
      </p>

      <PreviousYears />
    </footer>
  );
};

export default Footer;
